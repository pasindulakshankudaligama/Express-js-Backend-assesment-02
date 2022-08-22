const express = require("express");
const customer = require("./routes/customer");
const app = express();
const port = 5000;

app.use(express.json());

app.use("/customer", customer);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  