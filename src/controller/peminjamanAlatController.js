const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

exports.getAllLetter = (req, res) => {
  const baseUrl = `${process.env.API_URL}/v1/peminjamanalat/files`;
  const directoryPath = "./resources/peminjaman alat/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).json({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: `${baseUrl}/${file}`,
      });
    });

    res.status(200).json({
      message: "Surat Peminjaman berhasil ditampilkan",
      fileInfos,
    });
  });
};

exports.downloadLetter = (req, res) => {
  const modulName = req.params.file;
  const directoryPath = "./resources/peminjaman alat/";
  res.download(directoryPath + modulName, modulName, (err) => {
    if (err) {
      res.status(500).json({
        message: "Could not download the file. " + err,
      });
    }
  });
};
