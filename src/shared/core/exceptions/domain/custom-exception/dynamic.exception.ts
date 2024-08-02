import { Builder } from 'builder-pattern';

import { AppException } from '../base/app.exception';
import { ExceptionType } from '../exception-type';

export class CustomException extends AppException {
  public httpStatus: number;

  public readonly type = ExceptionType.DYNAMIC;

  public static builder() {
    return Builder(CustomException, { code: 'DYNAMIC_EXCEPTION' });
  }
}
