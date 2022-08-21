const express = require('express');
const router = express.Router()
const { getQr, home, sendMessagePost } = require('../controllers/web')


router.get('/', home)

router.get('/qr', getQr)

router.post('/enviar', sendMessagePost)

module.exports = router