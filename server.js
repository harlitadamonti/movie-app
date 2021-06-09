const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

app.use((err, req, res, next) => {
  res.json({
    success: false,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
