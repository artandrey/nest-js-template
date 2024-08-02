import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';

import { AppException } from '../../domain/base/app.exception';
import { EXCEPTION_TYPE_STATUSES } from '../../domain/exception-type';
import { ServerException } from '../../domain/server-exception/server.exception';
import { UnexpectedException } from '../../domain/unexpected-exception/unexpected.exception';
import { AppExceptionMapper } from '../../mapper/app-exception/app-exception.mapper';

@Catch()
export class GlobalExceptionsFilter extends BaseExceptionFilter implements ExceptionFilter {
  private readonly _logger = new Logger(GlobalExceptionsFilter.name);

  constructor(private readonly _exceptionMapper: AppExceptionMapper) {
    super();
  }

  catch(exception: AppException, host: ArgumentsHost) {
    exception = this._exceptionMapper.from(exception);
    if (exception instanceof UnexpectedException || exception instanceof ServerException) {
      if (exception.originalError instanceof Error) {
        this._logger.error(exception, exception.originalError.stack, exception.originalError.message);
        console.error(exception, exception.originalError.stack, exception.originalError.message);
      } else {
        this._logger.error(exception);
        console.error(exception);
      }
    }

    if (host.getType() === 'http') {
      const response: Response = host.switchToHttp().getResponse();
      if (exception instanceof AppException) {
        const status = // exception['httpStatus'] in case of CustomException
          exception['httpStatus'] ?? EXCEPTION_TYPE_STATUSES[exception.type] ?? HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).send({
          message: exception.message,
          status,
        });
      }
      return;
    }
    super.catch(exception, host);
  }
}
