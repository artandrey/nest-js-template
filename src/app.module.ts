import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './shared/config/config.module';
import { ExceptionsModule } from './shared/core/exceptions/exceptions.module';

@Module({
  imports: [ConfigModule, ExceptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
