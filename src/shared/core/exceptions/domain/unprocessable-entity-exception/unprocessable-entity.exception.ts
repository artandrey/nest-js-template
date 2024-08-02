import { AppException } from '~shared/core/exceptions/domain/base/app.exception';
import { ExceptionType } from '~shared/core/exceptions/domain/exception-type';

export abstract class UnprocessableEntityException extends AppException {
  public readonly type: ExceptionType = ExceptionType.UNPROCESSABLE_ENTITY;
}
