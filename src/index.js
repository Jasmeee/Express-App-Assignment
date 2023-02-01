require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const userRoute = require('./routes/UserRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/about-me', router);
app.use('/user', userRoute);

app.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server berhasil start di ${process.env.SERVER_PORT}`);
});
