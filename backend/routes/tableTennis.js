const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to Table Tennis API");
});

//#region Team A
router.get('/teamA/inc', (req, res) => {
    try {
        const {teamAinc} = require('../controllers/tableTennis');
        teamAinc(req, res);
    } catch (error) {
        res.status(500);
        res.send("Error occurred while updating score for Team A");
    }
});

//#endregion

//#region Team B
router.get('/teamB/inc', (req, res) => {
    try {
        const {teamBinc} = require('../controllers/tableTennis');
        teamBinc(req, res);
    } catch (error) {
        res.status(500);
        res.send("Error occurred while updating score for tableTennis of Team B");
    }
});

//#endregion

module.exports = router;