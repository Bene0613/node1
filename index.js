const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Mijn naam is Benedicte");
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
