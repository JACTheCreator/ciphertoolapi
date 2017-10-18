'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.post('/caesar/encrypt', api.caesar.encrypt)
router.post('/caesar/decrypt', api.caesar.decrypt)

module.exports = router