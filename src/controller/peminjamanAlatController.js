const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

exports.getAllLetter = (req, res) => {
  const api_key = req.query.k;
  let isApiKey = api_key === process.env.API_KEY;
  if (!isApiKey) {
    res.status(401).json({
      message: "Unauthorization",
    });
  }

  const baseUrl = "http://localhost:5000/v1/peminjamanalat/files";
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
        url: `${baseUrl}/${file}?k=${process.env.API_KEY}`,
      });
    });

    res.status(200).json({
      message: "Surat Peminjaman berhasil ditampilkan",
      fileInfos,
    });
  });
};

exports.downloadLetter = (req, res) => {
  const api_key = req.query.k;
  let isApiKey = api_key === process.env.API_KEY;
  if (!isApiKey) {
    res.status(401).json({
      message: "Unauthorization",
    });
  }

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
