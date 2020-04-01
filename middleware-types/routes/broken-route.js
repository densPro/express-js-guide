const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  throw new Error('Broken router');
});

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

module.exports = router;