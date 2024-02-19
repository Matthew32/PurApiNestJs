import * as fs from 'node:fs';
import { join } from 'node:path';
export class PurModel {
  constructor(protected filePath: string = '') {
    this.setFilePath(join(`${__dirname}/../../public/img`));
  }
  private setFilePath = (filePath) => {
    this.filePath = filePath;

    return this;
  };
  public getFiles = async () => {
    if (!this.filePath) {
      throw new Error('You need to set up the pur filepath.');
    }
    const files = await fs
      .readdirSync(this.filePath, { withFileTypes: true })
      .filter((item) => !item.isDirectory())
      .map((item) => item.name);
    return files;
  };
}
