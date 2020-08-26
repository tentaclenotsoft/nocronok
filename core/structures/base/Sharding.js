const { ShardingManager } = require('discord.js')

module.exports = class Sharding extends ShardingManager {
  constructor () {
    super('core/index.js')

    this.on('shardCreate', (shard) => console.log(`Launching shard ${shard.id + 1}/${this.totalShards}`))
  }
}
