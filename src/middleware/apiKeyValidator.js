exports.apiKeyValidator = function (req, res, next) {
  const api_key = req.query.k;
  let isApiKey = api_key === process.env.API_KEY;
  if (!isApiKey) {
    // res.status(401).json({
    //   message: "Unauthorization",
    // });
    res.redirect("http://localhost:3000");
  }
  next();
};
