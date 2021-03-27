import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/surah/1")
  getSura(): string {
    return this.appService.getSura()
  }

  @Get("/juz/1")
  getJuz(): string {
    return this.appService.getJuz()
  }
}
