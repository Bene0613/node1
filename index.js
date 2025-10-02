const express = require('express');
const logger = require('./middelware/logger');
const e = require('express');
const app = express();
const port = 3000;
const messageRouter = require ('./routers/v1/messages');


app.use("/api/v1/messages/", messageRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
