const express = require('express');
const router = express.Router();

// http://localhost:3000/admin/topsecret?isAdmin=true
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("Sorry not an Admin!")
})

router.get('/topsecret', (req, res) => {
    res.send("This is top secret")
})

router.get('/deleteeverything', (req, res) => {
    res.send("Ok deleted it all")
})

module.exports = router;