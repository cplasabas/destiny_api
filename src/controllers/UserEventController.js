const {user_events} = require('../models')

module.exports = {
	index (req,res){
		user_events.all().then(event => {
  			res.status(200).send({
		   		events: event
			})
		})
	},
	show (req,res){
		const id = req.params.id
		user_events.findAll({
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
		user_events.create(body).then(event => {
		    res.status(200).send({ 
		    	id: event._id, message: "User added to the event." 
		    })
		}).catch(error => {
		   res.status(400).send({
		   		message: "User already is added to the event."
		   })
		})
	},
	update (req,res){
		const id = req.params.id
		user_events.update(req.body,{
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
		user_events.destroy({
	        where: {
	        	id:id
	        }
	     }).then(() => {
	        res.status(201).send({
		  	 		message: "Successfully deleted."
		  	})
	     }).catch(error =>{
	     	res.status(400).send({
		  	 		message: "Failed to delete."
		  	})
	     })
	}
}