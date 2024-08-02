import { Global, Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config';

import { APP_CONFIG } from './constants';
import { validate } from './util/validate';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validate,
      ignoreEnvFile: false,
      envFilePath: ['./config/.env', './config/.env.local'],
    }),
  ],
  providers: [{ provide: APP_CONFIG, useClass: ConfigService }],
  exports: [APP_CONFIG],
})
export class ConfigModule {}
