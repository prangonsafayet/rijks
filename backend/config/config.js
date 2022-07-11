const redisConfig = {
    url: 'redis://default:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@localhost:6379',
    defaultObjectLifetime: 60 //in seconds
}

const apiConfig = {
    url: `https://www.rijksmuseum.nl/api/`,
    key: 'rirqQnx4'
}

module.exports = {redisConfig};