var fs = require('fs')
var json_db = JSON.parse(fs.readFileSync('../assets/data/user_dummy.json', 'utf8'));
var id_map = JSON.parse(fs.readFileSync('../assets/data/id.json', 'utf8'));


const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
BOT_TOKEN = '571221937:AAENOLNrt4gLfXKDCgb6q9rFVuO9uUzjIr4'
const bot = new Telegraf(BOT_TOKEN)

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Delete', 'delete')
])


// on start up 		
bot.start((ctx) => ctx.reply('Digital Twin Learning Bot!'))

//media splash 
bot.hears('info', (ctx) => { 
ctx.replyWithMediaGroup([
{
  'media': {source: '../assets/img/csc_logo.png'},
  'caption': 'Civil Service College Learning Bot 😃',
  'type': 'photo'
}]) 
ctx.reply(
  'reply with the following keywords\n'+ 
  'daily : your daily topics feed\n'+
  'learn : current course recommendation\n'+
  'guru  : experts in your area\n'+ 
  'help  : for full list of commands')
})

//bot.help((ctx) => ctx.reply('Send me a sticker'))

// daily digest
const daily_regex = new RegExp('[Dd]aily')
bot.hears(daily_regex, (ctx)=> {
	tele_id = ctx.chat.id
	topics_arr = json_db[tele_id]['topics']
	ctx.reply(id_map[tele_id]+'\'s Daily Feeds')
	for (var i in topics_arr) {
		var topic = topics_arr[i]
		var link_str = JSON.stringify(topic['postLink'])
		var content_str = JSON.stringify(topic['postContent'])
		var out_str = '<a href='+ link_str+'>'+content_str+'</a>'
		ctx.replyWithHTML(out_str) 
	}
})

// done courses
const learn_regex = new RegExp('[Ll]earn')
bot.hears(learn_regex, (ctx)=> {
	tele_id = ctx.chat.id
	ctx.reply(id_map[tele_id]+'\'s CSC Courses')
	learn_arr = json_db[tele_id]['cscCourses']
	var out_str = ""
	for (var i in learn_arr) {
		var learn = learn_arr[i]
		var name_str = JSON.stringify(expert['courseName']).replace(/\"/g, "")
		out_str += name_str+'\n' 
	}
	ctx.reply(out_str) 
})


// experts
const guru_regex = new RegExp('[Gg]uru[s]?')
bot.hears(guru_regex, (ctx)=> {
	tele_id = ctx.chat.id
	ctx.reply(id_map[tele_id]+'\'s Gurus')
	expert_arr = json_db[tele_id]['experts']
	var out_str = ""
	for (var i in expert_arr) {
		var expert = expert_arr[i]
		var name_str = JSON.stringify(expert['name']).replace(/\"/g, "")
		var div_str = JSON.stringify(expert['division']).replace(/\"/g, "")
		out_str += name_str+' @ '+div_str+'\n'
	}
	ctx.reply(out_str) 
})


bot.startPolling()
