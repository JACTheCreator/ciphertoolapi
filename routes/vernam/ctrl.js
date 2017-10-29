'use strict'

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
				'h', 'i', 'j', 'k', 'l', 'm', 'n', 
				'o', 'p', 'q', 'r', 's', 't', 'u', 
				'v', 'w', 'x', 'y', 'z']
let vernam = {
	encrypt: (req, res)=>{
		let encryptedMsg = ""
	  	let values = {	
	      key: req.body.key,
	      msg: req.body.msg
	    }
	    if (values.key.length != values.msg.length)
    		return res.json("Invaild Key") 

	    for (let i = 0; i <  values.msg.length; i++) {
	    	if (values.msg.charAt(i) == " "){
	    		encryptedMsg += " " 
	    	}else {
	    		for (let j = 0; j < alphabet.length; j++) {
	    			if(values.msg.charAt(i).toLowerCase() == alphabet[j]) {
	    				for (let k = 0; k < alphabet.length; k++) {
	    					if(values.key.charAt(i).toLowerCase() == alphabet[k]) {
		    					let index = ((j + k) % 26)
		    					encryptedMsg += alphabet[index]
		    					break;	
	    					}
	    				}    			
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
	    if (values.key.length != values.msg.length)
    		return res.json("Invaild Key") 

	    for (let i = 0; i <  values.msg.length; i++) {
	    	if (values.msg.charAt(i) == " "){
	    		decryptedMsg += " " 
	    	}else {
	    		for (let j = 0; j < alphabet.length; j++) {
	    			if(values.msg.charAt(i).toLowerCase() == alphabet[j]) {
	    				for (let k = 0; k < alphabet.length; k++) {
	    					if(values.key.charAt(i).toLowerCase() == alphabet[k]) {
		    					let index = ((j - k) % 26)
		    					decryptedMsg += alphabet[index]
		    					break;	
	    					}
	    				}    			
	    			}
	    		}
	    	}
	    }

	    return res.json(decryptedMsg)
	},
}

exports.vernam = vernam