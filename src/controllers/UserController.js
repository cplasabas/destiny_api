const {users} = require('../models')
const {events} = require('../models')
const {user_events} = require('../models')
const {attendance} = require('../models')

module.exports = {
	index (req,res){
		users.all().then(user => {
  			res.status(200).send({
		   		users: user
			})
		})
	},
	show (req,res){
		const id = req.params.id
		users.findAll({
	        where: {
	        	id:id
	        }
	     }).then(user => {
	        if (user && user.length > 0) {
	            res.status(200).send({
		  	 		data: user
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id
		users.update(req.body,{
			where:{
				id:id
			}
		}).then(user => {
			 res.status(200).send({ 
		    	id: user._id, message: "User successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update user."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		users.destroy({
	        where: {
	        	id:id
	        }
	     }).then(() => {
	        res.status(200).send({
		  	 		message: "Successfully deleted."
		  	})
	     }).catch(error =>{
	     	res.status(400).send({
		  	 		message: "Failed to delete."
		  	})
	     })
	},
	showChildren(req,res){

		const id = req.params.id

		users.findAll({
	        where: {
	        	parent:id
			},
			include:[{
				association:'children',
				include: [{
					association:'children',
					include: [{
						association: 'children', 
						include: [{ 
							association: 'children',
							include:[{
								association: 'children',
								include:[{
									association: 'children',
								}]
							}]
						}]
					}]
				}]
			}]
	     }).then(user => {
	        if (user && user.length > 0) {
	            res.status(200).send({
					data: user
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	showAttendance(req,res){
		const id = req.params.id

		attendance.findAll({
			attributes: ['id','user_id', 'event_id','createdAt','updatedAt'],
	        where: {
	           user_id: id
	        }
	     }).then(attendance => {
	        if (attendance && attendance.length > 0) {
	        	res.status(200).send({
			  	 	data: attendance
			  	})
	        }else{
	        	res.status(204).send()
	        }	
	        
	     })
	},
	showEvents(req,res){
		const id = req.params.id

		user_events.findAll({
			where:{
				user_id:id
			}
		}).then(user_event => {
			if(user_event && user_event.length > 0){
				res.status(200).send({
			  	 	data: user_event
			  	})
			}else{
				res.status(204).send()
			}
		})
	},
	showEventAttendance(req,res){
		const user_id = req.params.user_id
		const event_id = req.params.event_id

		attendance.findAll({
			attributes: ['id','user_id', 'event_id','createdAt','updatedAt'],
	        where: {
	           user_id: user_id,
	           event_id: event_id
	        }
	     }).then(attendance => {
	        if (attendance && attendance.length > 0) {
	            res.status(200).send({
		  	 		data: attendance
		  		})
	        }else{
	        	res.status(204).send()
	        }
	        
	     })
	}
}