const {redisConfig} = require('../config/config')
const redis = require('redis');
class RedisClient {
    
    constructor(config) {   
        this.client  = redis.createClient({
        url: redisConfig.url
        });
    }

    async setKey(key, value, lifetime){
        this.client.connect();
        await this.client.set(key, value);
        this.client.quit();

    }

    async getKey(key){
        this.client.connect();
        const data = await this.client.get(key);
        this.client.quit();
        return data;
    }

    // deleteKey(key){
    //     return await this.client.dele
    // }

    async withCache(key, loader){
        let data = await this.getKey(key);
        if(!data){
             data = await loader();
            if(data){
                data = JSON.stringify(data);
            }
            await this.setKey(key, data, redisConfig.defaultObjectLifetime);
        }

        return data;
    }  
   
}

const redisClient = new RedisClient(redisConfig);
module.exports = redisClient;