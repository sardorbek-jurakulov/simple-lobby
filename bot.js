const Telegraf = require('telegraf'); // nodejsning telegram bot bilan ishlash imkonini beruvchi telegraf metodi ulandi loyihaga

const bot = new Telegraf('2091225781:AAEWFmV37CttQZuI7FpODXykeB8o7chCL7M'); // telegram botimizni tokeni orqali loyihamizdan u botni vakilini hosil qilib oldik

bot.command("start", (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Telegram sendMessage", 
        {
            parse_mode: 'Markdown',
            disable_notification: true
        }
    );

    ctx.reply("Hello world", 
        {
            parse_mode: 'Markdown',
            disable_notification: true
        }
    );
});

// bot.use((ctx, next) => {
//     ctx.state.apple = 5;
//     console.log(ctx);
//     ctx.reply("You have used this bot");
//     next(ctx)
// });

// bot.start((ctx) => {
    // ctx.reply(ctx.from.first_name + " have entered the start command and it is a " + ctx.updateSubTypes[0]);
    // ctx.reply(ctx.state.apple);
    // console.log(ctx);
    // console.log(ctx.from);
    // console.log(ctx.chat);
    // console.log(ctx.message);
    // console.log(ctx.updateSubTypes);
// });

// bot.help((ctx) => {
//     ctx.reply("You have entered the help command");
// });

// bot.settings((ctx) => {
//     ctx.reply("You have entered settings command");
// });

// bot.command(["test", "Test", "test1"], (ctx)=>{
//     ctx.reply("Hello World");
// });

// bot.hears("cat", (ctx) => {
//     ctx.reply("Meow");
// });

// bot.on("text", (ctx, next) => {
//     ctx.reply("This is a text message");

//     next(ctx);
// });

// bot.on("sticker", (ctx) => {
//     ctx.reply("This is a sticer message");
// });

// bot.mention("turoniy", (ctx) => {
//     ctx.reply("Mention method");
// });

// bot.phone("+998-94-611-04-64", (ctx) => {
//     ctx.reply("Phone method");
// });

// bot.hashtag("hash", (ctx) => {
//     ctx.reply("hashtag method");
// });

bot.launch(); // telegramdagi updatelarni pull qilish uchun ishlatiladi