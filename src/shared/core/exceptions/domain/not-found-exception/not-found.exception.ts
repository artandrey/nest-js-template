import { AppException } from '../base/app.exception';
import { ExceptionType } from '../exception-type';

export abstract class NotFoundException extends AppException {
  public readonly type = ExceptionType.NOT_FOUND;
}
