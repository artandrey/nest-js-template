import { AppException } from '../base/app.exception';
import { ExceptionType } from '../exception-type';

export abstract class ServerException extends AppException {
  public readonly type: ExceptionType = ExceptionType.SERVER;
}
