import { AppException } from '../base/app.exception';
import { ExceptionType } from '../exception-type';

export abstract class TooManyRequestsException extends AppException {
  public type: ExceptionType = ExceptionType.TOO_MANY_REQUESTS;
}
