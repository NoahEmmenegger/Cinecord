const { ShardingManager } = require('discord.js');
const config = require('./config.json')

const manager = new ShardingManager('./src/bot.js', { token: config.TOKEN});

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();