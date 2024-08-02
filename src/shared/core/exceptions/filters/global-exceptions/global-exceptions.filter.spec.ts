import { Test, TestingModule } from '@nestjs/testing';

import { AppExceptionMapper } from '../../mapper/app-exception/app-exception.mapper';
import { GlobalExceptionsFilter } from './global-exceptions.filter';

describe('GlobalExceptionsFilter', () => {
  let provider: AppExceptionMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppExceptionMapper],
    }).compile();

    provider = module.get<AppExceptionMapper>(AppExceptionMapper);
  });

  it('should be defined', async () => {
    expect(new GlobalExceptionsFilter(provider)).toBeDefined();
  });
});
