const Telegraf = require('telegraf'); // nodejsning telegram bot bilan ishlash imkonini beruvchi telegraf metodi ulandi loyihaga

const bot = new Telegraf('2091225781:AAEWFmV37CttQZuI7FpODXykeB8o7chCL7M'); // telegram botimizni tokeni orqali loyihamizdan u botni vakilini hosil qilib oldik

//start

bot.start((ctx) => {
    ctx.reply(ctx.from.first_name + " have entered the start command and it is a " + ctx.updateSubTypes[0]);
    // console.log(ctx);
    // console.log(ctx.from);
    // console.log(ctx.chat);
    // console.log(ctx.message);
    // console.log(ctx.updateSubTypes);
});

bot.help((ctx) => {
    ctx.reply("You have entered the help command");
});

bot.settings((ctx) => {
    ctx.reply("You have entered settings command");
});

bot.command(["test", "Test", "test1"], (ctx)=>{
    ctx.reply("Hello World");
});

bot.hears("cat", (ctx) => {
    ctx.reply("Meow");
});

bot.on("text", (ctx) => {
    ctx.reply("This is a text message");
});

bot.on("sticker", (ctx) => {
    ctx.reply("This is a sticer message");
});
bot.launch(); // telegramdagi updatelarni pull qilish uchun ishlatiladi