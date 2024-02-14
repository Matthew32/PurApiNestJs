import * as fs from 'node:fs';

export class PurModel {
  constructor(protected filePath: string = '') {
    this.setFilePath(`${__dirname}/public/img`);
  }
  private setFilePath = (filePath) => {
    this.filePath = filePath;

    return this;
  };
  public getFiles = async () => {
    if (!this.filePath) {
      throw new Error('You need to set up the pur filepath.');
    }
    console.log(this.filePath);
    const files = await fs
      .readdirSync(this.filePath, { withFileTypes: true })
      .filter((item) => !item.isDirectory())
      .map((item) => item.name);
    return files;
  };
}
