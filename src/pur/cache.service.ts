export class CacheService {
  private nodeCache;
  constructor() {
    const NodeCache = require('node-cache');
    this.nodeCache = new NodeCache();
  }
  public get = async (key: string) => {
    const data = await this.nodeCache.get(key);
    return data;
  };
  public save = async (key: string, value: any, seconds: number = 10000) => {
    await this.nodeCache.set(key, value, seconds);
    return true;
  };
  public delete = async (key: string) => {
    await this.nodeCache.del(key);

    return true;
  };
}
