'use strict'

let vernam = {
  encrypt: (req, res)=>{
    return res.json("Encrypt")
  },
  decrypt: (req, res)=>{
    return res.json("Encrypt")
  },
}

exports.vernam = vernam