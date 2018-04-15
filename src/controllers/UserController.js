const {User} = require('../models')

module.exports = {
	show (req,res){
		User.all().then(user => {
  			res.status(200).send({
		   		users: user
			})
		})
	}
}