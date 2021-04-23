const Telegraf = require("telegraf");
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

const model = require("../model/index");

const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.use(Telegraf.log());

bot.start((ctx) => {
  const startMessage = `Hallo.. ${ctx.update.message.from.first_name}\nPilih <code>Praktikum</code> atau <code>Bebas lab</code> untuk memulai.`;
  //   sendStartMessage(ctx, startMessage);
  ctx.reply(startMessage, Extra.HTML());
});

bot.command("role", (ctx) => {
  const startMessage = `Hallo.. ${ctx.update.message.from.first_name}\nPilih <code>Praktikum</code> atau <code>Bebas lab</code> untuk memulai.`;
  sendStartMessage(ctx, startMessage);
});

bot.action("bebas lab", (ctx, next) => {
  ctx.reply("masukan nama dan nim dengan format\n\nNama\nNim");
  bot.on("message", async (ctx) => {
    const input = ctx.update.message.text.split("\n");
    console.log(input);

    await model.bebasLab
      .findOne({ where: { nama: input[0], nim: input[1] } })
      .then((data) => {
        const message = `Status pendaftaran bebas lab Fisika FMIPA Untan.\n\nNama     : ${data.nama}\nNIM        : ${data.nim}\nStatus    : ${data.status}\n\nJika ada kendala atau perbaikan data\nsilahkan langsung ke laboratorium fisika dasar.\nPengambilan dapat dilakukan pada hari kerja pukul <b>08:00 - 11:00</b> dan <b>13:00 - 16:00</b> wib.\nBantuan dapat dengan perintah /help`;
        ctx.reply(
          message,
          Extra.HTML().markup((m) =>
            m.inlineKeyboard([m.callbackButton("Kembali ke menu", "start")])
          )
        );
      })
      .catch((error) => {
        const message = "Masukkan data yang benar";
        ctx.reply(
          message,
          Extra.HTML().markup((m) =>
            m.inlineKeyboard([m.callbackButton("Kembali ke menu", "start")])
          )
        );
      });
  });
});

bot.action("praktikum", (ctx) => {
  console.log(ctx);
  return ctx.reply("ini bebas Lab");
});

bot.action("start", (ctx) => {
  sendStartMessage(ctx);
});

function sendStartMessage(ctx, startMessage) {
  const defultMessage = `Terimakasih telah menggunakan saya.\nPilih <code>Praktikum</code> atau <code>Bebas lab</code> untuk memulai.`;
  return ctx.reply(
    startMessage ?? defultMessage,
    Extra.HTML().markup((m) =>
      m.inlineKeyboard([
        m.callbackButton("Praktikum", "praktikum"),
        m.callbackButton("Bebas Lab", "bebas lab"),
      ])
    )
  );
}

bot.help((ctx) => {
  return ctx.reply(
    "Untuk memulai masukkan perintah /start dan\nikuti petunjuk selanjutnya."
  );
});
// bot.on("message", (ctx) => {
//   const input = ctx.update.message.text;
//   console.log(input);
// });

bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
