const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply('Welcome'))

bot.hears(/\/repeat (.+)/, ctx => {
  ctx.replyWithMarkdown(ctx.message)
})

bot.command('Hi', (ctx) => ctx.reply('Hello'))

bot.launch()