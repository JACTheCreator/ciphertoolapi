'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.post('/columnar/encrypt', api.columnar.encrypt)
router.post('/columnar/decrypt', api.columnar.decrypt)

module.exports = router