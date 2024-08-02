import { Test, TestingModule } from '@nestjs/testing';

import { AppExceptionMapper } from './app-exception.mapper';

describe('AppExceptionMapper', () => {
  let provider: AppExceptionMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppExceptionMapper],
    }).compile();

    provider = module.get<AppExceptionMapper>(AppExceptionMapper);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
