'use strict'

let columnar = {
	encrypt: (req, res)=>{
		let encryptMsg = ""
		let rows = [];
		let values = {
			msg : req.body.msg,
			key : req.body.key,
			padding : req.body.padding,
			spacing : req.body.spacing,
		}

		if(!values.spacing)
			values.msg = values.msg.replace(/\s/g, "")

		for (let i = 0; i < values.msg.length; i++) {
			encryptMsg += values.msg.charAt(i)
			if((i+1) % values.key.length === 0){
				rows.push(encryptMsg)
				encryptMsg = ""
			}
		}

		if(encryptMsg.length !== 0) {
			encryptMsg += values.padding.repeat(values.key.length - encryptMsg.length)
			rows.push(encryptMsg)
		}

		for (let i = 0; i < rows.length; i++) {
			let all = []
			for (let j = 0; j < values.key.length; j++)
				all.push({ 'key': values.key.split('')[j], 'rows': rows[i].split('')[j] })
			all.sort(function(a, b) {
			  if (a.key< b.key) return -1
			  if (a.key > b.key) return 1
			  return 0
			})
			rows[i] = ""
			for (let j = 0; j < all.length; j++) 
   				rows[i] += all[j].rows
		}
 
		return res.json(rows.join().replace(/,/g, ""))
	},
	decrypt: (req, res)=>{
		let decryptMsg = ""
		let rows = [];
		let values = {
			msg : req.body.msg,
			key : req.body.key,
			spacing : req.body.spacing,
		}

		for (let i = 0; i < values.msg.length; i++) {
			decryptMsg += values.msg.charAt(i)
			if((i+1) % values.key.length === 0){
				rows.push(decryptMsg)
				decryptMsg = ""
			}
		}

		if(decryptMsg.length !== 0) {
			rows.push(decryptMsg)
		}

		let sortedKeyArray = values.key.split('').sort(function(a, b) {
			  if (a < b) return -1
			  if (a > b) return 1
			  return 0
			}) 

		let unsortedKeyArray = values.key.split('')

		for (let i = 0; i < rows.length; i++) {
			let all = []
			for (let j = 0; j < values.key.length; j++)
				all.push({ 
					'key': sortedKeyArray[j], 
					'rows': rows[i].split('')[j] 
				})
			all.sort(function(a, b) {
				return unsortedKeyArray.indexOf(a.key) - unsortedKeyArray.indexOf(b.key)
			})
			rows[i] = ""
			for (let j = 0; j < all.length; j++) 
					rows[i] += all[j].rows
		}

  		return res.json(rows.join().replace(/,/g, ""))
	},
}

exports.columnar = columnar