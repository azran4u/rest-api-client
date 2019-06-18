import Redis from 'ioredis';

export class RedisCache {

    private instance: Redis.Redis | null;

    constructor() {
        this.instance = null;
    }

    public write(key: Redis.KeyType, ...args: any[]): Promise<0 | 1> {
        return this.getInstance().hmset(key, ...args);
    }

    public read(key: Redis.KeyType, ...fields: string[]): any {
        return this.getInstance().hmget(key, ...fields);
    }

    private getInstance(): Redis.Redis {
        if (!this.instance) {
            this.instance = new Redis({
                family: 4,
                host: '192.168.99.100',
                port: 6379,
            });
            return this.instance;
        } else {
            return this.instance;
        }
    }
}
