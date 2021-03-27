import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurahModule } from './surah/surah.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'passwd123',
      database: 'quran_db',
      entities: [],
      synchronize: true,
    }),
    SurahModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
