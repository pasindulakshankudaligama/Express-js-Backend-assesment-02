const express = require("express");
const customer = require("./routes/Customer");
const item = require("./routes/Item");
const order = require("./routes/Order");
const app = express();
const port = 5600;

app.use(express.json());

app.use("/customer", customer);
app.use("/item", item);
app.use("/order",order);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  