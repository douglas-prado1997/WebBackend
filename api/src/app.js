const express = require('express');
const router = require('./router');
const cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use((req, res, next) => {
    console.log(`Recebida solicitação ${req.method} para ${req.url}`);
    next();
  });
app.use(router);



module.exports = app;