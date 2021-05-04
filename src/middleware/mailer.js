const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const hbs = require("nodemailer-express-handlebars");
dotenv.config();

const mail = async (data, mode, subject, confirm) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    // logger: true,
    // debug: true,
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
    subject: subject,
    template: "praktikum/template",
    context: {
      nama: data.nama,
      nim: data.nim,
      prodi: data.prodi,
      praktikum: data.praktikum,
      keterangan: data.keterangan,
      konfirmasi: confirm,
    },
  };

  const mailBebasLab = {
    from: process.env.EMAIL,
    to: data.email,
    subject: subject,
    template: "bebaslab/template",
    context: {
      nama: data.nama,
      nim: data.nim,
      prodi: data.prodi,
      status: data.status,
      konfirmasi: confirm,
    },
  };

  if (mode === "PRAKTIKUM") {
    transporter.sendMail(mailPraktikum, (err, info) => {
      if (err) throw err;
      console.log("Email send info: " + info.response);
    });
  } else if (mode === "BEBAS_LAB") {
    transporter.sendMail(mailBebasLab, (err, info) => {
      if (err) throw err;
      console.log("Email send info: " + info.response);
    });
  }
};

module.exports = mail;
