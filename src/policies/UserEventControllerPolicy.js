const joi = require("joi")

module.exports = {
	create (req,res,next) {
		const schema = {
			user_id: joi.number().integer(),
			event_id: joi.number().integer()
		}	

		const {error,value} = joi.validate(req.body,schema)

		if(!error){
			next()	
		}else{
			res.status(400).send({
				error: error.details[0].message
			})
		}
	}
}