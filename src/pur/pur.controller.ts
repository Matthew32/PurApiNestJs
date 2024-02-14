import { Headers, Controller, Get } from '@nestjs/common';
import { PurService } from './pur.service';
import { CacheService } from './cache.service';
@Controller()
export class PurController {
  constructor(
    private readonly purService: PurService,
    private readonly cacheService: CacheService,
  ) {}

  @Get()
  async getImage(@Headers() headers: Headers) {
    const hostUrl = headers['host'];
    let urlPath = await this.purService.getAnimalUrl(hostUrl);
    const cacheKey = this.purService.getCacheKey();
    let showedAnimals = (await this.cacheService.get(cacheKey)) ?? [];
    if (showedAnimals) {
      let repeatedNumber = 0;
      do {
        urlPath = await this.purService.getAnimalUrl(hostUrl);
        repeatedNumber++;
      } while (showedAnimals.includes(urlPath) && repeatedNumber < 3);
    }
    if (showedAnimals.length > 20) {
      this.cacheService.delete(cacheKey);
      showedAnimals = [];
    }
    this.cacheService.save(cacheKey, [...showedAnimals, urlPath]);
    return urlPath;
  }
}
