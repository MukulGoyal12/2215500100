const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/numbers", indexRouter);

app.listen(9876);

