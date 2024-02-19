import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurController } from 'src/pur/pur.controller';
import { PurService } from 'src/pur/pur.service';
import { PurModel } from 'src/pur/pur.model';
import { CacheService } from 'src/cache/cache.service';

@Module({
  imports: [],
  controllers: [AppController, PurController],
  providers: [AppService, PurModel, PurService, CacheService],
})
export class AppModule {}
