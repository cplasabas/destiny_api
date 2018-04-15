const {attendance} = require('../models')

module.exports = {
	show (req,res){
		users.all().then(user => {
  			res.status(200).send({
		   		users: user
			})
		})
	},
	showUserAttendance(req,res){
		const id = req.params.id

		attendance.findAll({
			attributes: ['id','user_id', 'event_id','createdAt','updatedAt'],
	        where: {
	           user_id: id
	        }
	     }).then(function(attendance) {
	        if (!attendance) {
	            res.status(204).send()
	        }
	        res.status(200).send({
		  	 data: attendance
		  	})
	     })
	},
	showUserEventAttendance(req,res){
		const user_id = req.params.user_id
		const event_id = req.params.event_id

		attendance.findAll({
			attributes: ['id','user_id', 'event_id','createdAt','updatedAt'],
	        where: {
	           user_id: user_id,
	           event_id: event_id
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