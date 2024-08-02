import { ValidationFailedException } from '~shared/core/validation/exceptions/validation-failed/validation-failed.exception';

import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  it('should be defined', () => {
    expect(
      new ErrorInterceptor({
        from: () => new ValidationFailedException('test'),
      }),
    ).toBeDefined();
  });
});
