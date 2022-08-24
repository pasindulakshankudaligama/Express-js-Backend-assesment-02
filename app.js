const express = require("express");
const customer = require("./routes/Customer");
const item = require("./routes/Item");
const app = express();
const port = 5000;

app.use(express.json());

app.use("/customer", customer);
app.use("/item", item);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  