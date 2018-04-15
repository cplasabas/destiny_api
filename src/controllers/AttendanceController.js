const {attendance} = require('../models')
const {event} = require('../models')
const {users} = require('../models')

module.exports = {
	index (req,res){
		attendance.all().then(attendance => {
  			res.status(200).send({
		   		data: attendance
			})
		})
	},
	show (req,res){
		const id = req.params.id

		attendance.find({
			attributes: ['user_id', 'event_id','createdAt','updatedAt'],
	        where: {
	           id: id
	        }
	     }).then(function(attendance) {
	        if (!attendance) {
	            res.status(204).send()
	        }
	        res.status(200).send({
		  	 data: attendance
		  	})
	     })
	}
}