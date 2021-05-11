__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/dashboard.html')
})

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/dashboard.html')
})

router.get('/account', (req, res) => {
    res.sendFile(__path + '/views/accounts.html')
})

router.get('/changelog', (req, res) => {
    res.sendFile(__path + 'views/typography.html')
})

router.get('/user', (req, res) => {
    res.sendFile(__path + '/views/user.html')
})

router.get('/tutor', (req, res) => {
    res.sendFile(__path + '/views/tutor.html')
})

router.get('/login', (req, res) => {
    res.sendFile(__path + '/views/login.html')
})

router.get('/notification', (req, res) => {
    res.sendFile(__path + '/views/notifications.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Dehan • BOT',
            namaowner: 'Dehanjing',
            instagram: 'dehan_j1ng',
            youtube : 'ンテ Dehanjing'
        }
    }
    res.json(config)
})

module.exports = router
