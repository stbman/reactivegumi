const Telegraf = require('telegraf')
BOT_TOKEN = '571221937:AAENOLNrt4gLfXKDCgb6q9rFVuO9uUzjIr4'
const bot = new Telegraf(BOT_TOKEN)

    bot.start((ctx) => ctx.reply('Welcome!'))
    bot.help((ctx) => ctx.reply('Send me a sticker'))
    bot.on('sticker', (ctx) => ctx.reply('👍'))
    bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))

    bot.startPolling()
