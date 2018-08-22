import express from 'express'

const router = express.Router();
const json = require('../src/testData.json');

router.get('/contests', (req, res) => {
    res.send({ contests: json.contests});
});

export default router;