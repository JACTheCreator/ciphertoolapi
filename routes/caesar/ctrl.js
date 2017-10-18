'use strict'

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
				'h', 'i', 'j', 'k', 'l', 'm', 'n', 
				'o', 'p', 'q', 'r', 's', 't', 'u', 
				'v', 'w', 'x', 'y', 'z']
let caesar = {
	encrypt: (req, res)=>{
		let encryptedMsg = ""
	  	let values = {	
	      key: req.body.key,
	      msg: req.body.msg
	    }

	    for (let i = 0; i <  values.msg.length; i++) {
	    	if (values.msg.charAt(i) == " "){
	    		encryptedMsg += " " 
	    	}else {
	    		for (let j = 0; j < alphabet.length; j++) {
	    			if(values.msg.charAt(i).toLowerCase() == alphabet[j]) {
	    				let index = ((j + values.key) % 26)
	    				encryptedMsg += alphabet[index]
	    				break;	    			
	    			}
	    		}
	    	}
	    }

	    return res.json(encryptedMsg)
  	},
  	decrypt: (req, res)=>{
  		let decryptedMsg = ""
	  	let values = {	
	      key: req.body.key,
	      msg: req.body.msg
	    }

	    for (let i = 0; i <  values.msg.length; i++) {
	    	if (values.msg.charAt(i) == " "){
	    		decryptedMsg += " " 
	    	}else {
	    		for (let j = 0; j < alphabet.length; j++) {
	    			if(values.msg.charAt(i).toLowerCase() == alphabet[j]) {
	    				let index = ((j - values.key) % 26)
	    				decryptedMsg += alphabet[index]
	    				break;	    			
	    			}
	    		}
	    	}
	    }

	    return res.json(decryptedMsg)
	},
}

exports.caesar = caesar