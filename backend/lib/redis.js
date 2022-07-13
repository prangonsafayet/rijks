const {redisConfig} = require('../config/config')
const redis = require('redis');
class RedisClient {
    
    constructor() {   
        this.client  = redis.createClient({
        url: redisConfig.url
        });
    }

    async setKey(key, value, lifetime=redisConfig.defaultObjectLifetime){
        this.client.connect();
        await this.client.set(key, value);
        await this.client.expire(key, lifetime);
        this.client.quit();
    }

    async getKey(key){
        this.client.connect();
        const data = await this.client.get(key);
        this.client.quit();
        return data;
    }

    async withCache(key, loader){
        let data = await this.getKey(key);
        if(!data){
             data = await loader();

            if(data){

                await this.setKey(key, JSON.stringify(data), redisConfig.defaultObjectLifetime);
            }
        }
        return data;
    }  
   
}

const redisClient = new RedisClient(redisConfig);
module.exports = redisClient;