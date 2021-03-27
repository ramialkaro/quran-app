import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSura(): string {
    return "First Sura from Quran"
  }

  getJuz(): string {
    return "First Juz in Quran"
  }
}
