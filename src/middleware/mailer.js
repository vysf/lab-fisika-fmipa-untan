const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const hbs = require("nodemailer-express-handlebars");
dotenv.config();

const mail = async (data, mode) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    logger: true,
    debug: true,
  });

  transporter.use(
    "compile",
    hbs({
      viewEngine: {
        extName: ".handlebars",
        partialsDir: __dirname + "/views/",
        defaultLayout: false,
      },
      viewPath: __dirname + "/views/",
      extName: ".handlebars",
    })
  );

  const mailPraktikum = {
    from: process.env.EMAIL,
    to: data.email,
    subject: "Konfirmasi Pendaftaran Praktikum Lab Fisika",
    template: "praktikum/template",
    context: {
      nama: data.nama,
      nim: data.nim,
      prodi: data.prodi,
      praktikum: data.praktikum,
      keterangan: data.keterangan,
    },
  };

  const mailBebasLab = {
    from: process.env.EMAIL,
    to: data.email,
    subject: "Konfirmasi Pendaftaran Bebas Lab Fisika",
    template: "bebaslab/template",
    context: {
      nama: data.nama,
      nim: data.nim,
      prodi: data.prodi,
    },
  };

  if (mode === "praktikum") {
    transporter.sendMail(mailPraktikum, (err, info) => {
      if (err) throw err;
      console.log("Email send info: " + info.response);
    });
  } else if (mode === "bebas lab") {
    transporter.sendMail(mailBebasLab, (err, info) => {
      if (err) throw err;
      console.log("Email send info: " + info.response);
    });
  }
};

module.exports = mail;
