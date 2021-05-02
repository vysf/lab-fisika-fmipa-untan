const { Telegraf, Extra } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
const CHANNEL_ID = -1001486077070;

function todayTimeDate() {
  var today = new Date();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var msg =
    today.getDate() +
    " " +
    months[today.getMonth()] +
    " " +
    today.getFullYear() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();
  return msg;
}

const notifikasi = async function (data, mode) {
  var pesan = "";

  if (mode === "PERMOHONAN NILAI") {
    pesan += "\n <b>" + mode + "</b>";
    pesan += "\n⏱ <code>" + todayTimeDate() + " WIB.</code>";
    pesan += "\n\n✅ <b>" + "nama" + "</b>\n💬 <code>" + data.nama + "</code>";
    pesan +=
      "\n\n✅ <b>" + "prodi" + "</b>\n💬 <code>" + data.prodi + "</code>";
    pesan += "\n\n✅ <b>" + "nim" + "</b>\n💬 <code>" + data.nim + "</code>";
    pesan +=
      "\n\n✅ <b>" + "matkul" + "</b>\n💬 <code>" + data.matkul + "</code>";
  } else if (mode === "PENDAFTARAN BEBAS LAB") {
    pesan += "\n <b>" + mode + "</b>";
    pesan += "\n⏱ <code>" + todayTimeDate() + " WIB.</code>";
    pesan += "\n\n✅ <b>" + "nama" + "</b>\n💬 <code>" + data.nama + "</code>";
    pesan +=
      "\n\n✅ <b>" + "prodi" + "</b>\n💬 <code>" + data.prodi + "</code>";
    pesan += "\n\n✅ <b>" + "nim" + "</b>\n💬 <code>" + data.nim + "</code>";
    pesan +=
      "\n\n✅ <b>" +
      "matkul" +
      "</b>\n💬 <code>" +
      data.nomorRegistrasi +
      "</code>";
  }

  bot.telegram.sendMessage(CHANNEL_ID, pesan, Extra.HTML());
};
module.exports = notifikasi;
