'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.post('/vernam/encrypt', api.vernam.encrypt)
router.post('/vernam/decrypt', api.vernam.decrypt)

module.exports = router