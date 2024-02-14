import { Module } from '@nestjs/common';
import { PurController } from './pur.controller';
import { PurService } from './pur.service';
import { CacheService } from './cache.service';
import { PurModel } from './pur.model';

@Module({
  imports: [],
  controllers: [PurController],
  providers: [PurModel, PurService, CacheService],
})
export class PurModule {}
