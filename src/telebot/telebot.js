const Telegraf = require('telegraf')
BOT_TOKEN = '571221937:AAENOLNrt4gLfXKDCgb6q9rFVuO9uUzjIr4'
const bot = new Telegraf(BOT_TOKEN)

// 		
bot.start((ctx) => ctx.reply('Digital Twin Learning Bot!'))

//media splash 
bot.command('/info', (ctx) => { ctx.replyWithMediaGroup([
{
  'media': {source: '../assets/img/csc_logo.png'},
  'caption': 'Civil Service College Learning Bot 😃\n type /help for list of commands ',
  'type': 'photo'
}]) })


bot.help((ctx) => ctx.reply('Send me a sticker'))

// daily digest
bot.hears('daily', (ctx)=> ctx.reply())

// quick review
bot.hears('review', (ctx)=> ctx.reply())

// done courses

// helpful tips
bot.hears('tips', (ctx)=> ctx.reply())

// scorecard
bot.hears('scorecard', (ctx)=> ctx.reply())

// experts
bot.hears('guru', (ctx)=> ctx.reply())



bot.startPolling()
