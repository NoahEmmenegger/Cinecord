const Discord = require('discord.js')
const config = require('../config.json')

const { commandHandler } = require('./handler/commandHandler')
const { readyHandler } = require('./handler/readyHandler')

// Global client
client = new Discord.Client();

// Events
client.on('ready', () => readyHandler())

client.on('message', (msg) => commandHandler(msg))

// login
client.login(config.TOKEN)