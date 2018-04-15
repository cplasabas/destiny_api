const {events} = require('../models')
const {attendance} = require('../models')

module.exports = {
	index (req,res){
		events.all().then(event => {
  			res.status(200).send({
		   		events: event
			})
		})
	},
	show (req,res){
		const id = req.params.id
		events.findAll({
	        where: {
	        	id:id
	        }
	     }).then(event => {
	        if (event && event.length > 0) {
	            res.status(200).send({
		  	 		data: event
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	create (req,res){
		events.create(req.body).then(event => {
		    res.status(201).send({ 
		    	id: event._id, message: "Event Created." 
		    })
		}).catch(error => {
		   res.status(400).send({
		   		message: "Event already exists."
		   })
		})
	},
	update (req,res){
		const id = req.params.id
		events.update(req.body,{
			where:{
				id:id
			}
		}).then(event => {
			 res.status(200).send({ 
		    	id: event._id, message: "Event successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update event."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		events.destroy({
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
	showEventAttendance(req,res){
		const id = req.params.id
		attendance.findAll({
			attributes: ['id','user_id', 'event_id','createdAt','updatedAt'],
	        where: {
	           event_id: id
	        }
	    }).then(attendance => {
	        if (attendance && attendance > 0) {
	             res.status(200).send({
		  	 		data: attendance
		  		})
	        }else{
	        	res.status(204).send()
	        }
	    })
	}
}