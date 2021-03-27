import { Module } from '@nestjs/common';
import { SurahService } from './surah.service';

@Module({
  providers: [SurahService]
})
export class SurahModule {}
