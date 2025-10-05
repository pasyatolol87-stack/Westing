require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, User, Metric } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
app.use('/api/auth', authRouter);
app.use('/api', apiRouter);

const PORT = process.env.PORT || 4000;

(async () => {
  await sequelize.sync({ alter: true });
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
