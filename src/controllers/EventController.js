const {users} = require('../models')
const {attendance} = require('../models')

module.exports = {
	show (req,res){
		
	},
	showEventAttendance(req,res){
		const id = req.params.id

		attendance.findAll({
			attributes: ['id','user_id', 'event_id','createdAt','updatedAt'],
	        where: {
	           event_id: id
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