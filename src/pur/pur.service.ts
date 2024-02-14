/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { PurModel } from './pur.model';

@Injectable()
export class PurService {
  constructor(private readonly purModelInstance: PurModel) {}
  public getCacheKey = () => {
    return 'showedAnimals';
  };
  public getCatFile = async () => {
    const catImages = await this.purModelInstance.getFiles();
    const item = catImages[Math.floor(Math.random() * catImages.length)];
    return item;
  };
  public getAnimalUrl = async (host) => {
    const urlPath = await this.getCatFile();
    return `${process.env.PROTOCOL}://${host}/img/${urlPath}`;
  };
}
