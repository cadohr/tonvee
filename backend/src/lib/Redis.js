import redis from 'redis';
import { promisify } from 'util';

import redisConfig from '../config/redis';

class Redis {
  constructor() {
    this.client = redis.createClient(redisConfig);
    this.get = promisify(this.client.get).bind(this.client);

    this.client.on('error', (err) => {
      console.log(err);
    });
  }

  set(key, value) {
    return this.client.set(key, value);
  }

  async get(key) {
    return this.get(key);
  }
}

export default new Redis();
