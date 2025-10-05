const express = require('express');
const { Metric } = require('../models');
const router = express.Router();

router.get('/dashboard', async (req, res) => {
  const data = await Metric.findAll({ limit: 20, order: [['timestamp', 'DESC']] });
  res.json({ ok: true, data });
});

router.post('/seed', async (req, res) => {
  for (let i = 0; i < 10; i++) {
    await Metric.create({ name: 'metric1', value: Math.random() * 100 });
  }
  res.json({ ok: true });
});

module.exports = router;
