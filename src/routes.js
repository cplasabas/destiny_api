const AuthController = require("./controllers/AuthController")
const UserController = require("./controllers/UserController")
const EventController = require("./controllers/EventController")
const UserEventController = require("./controllers/UserEventController")
const AttendanceController = require("./controllers/AttendanceController")

const EventControllerPolicy = require("./policies/EventControllerPolicy")
const UserEventControllerPolicy = require("./policies/UserEventControllerPolicy")
const AuthControllerPolicy = require("./policies/AuthControllerPolicy")
const JwtControllerPolicy = require("./policies/JwtControllerPolicy")
const AttendanceControllerPolicy = require("./policies/AttendanceControllerPolicy")

module.exports = (app) => {
	app.post('/register',AuthControllerPolicy.register,AuthController.register)
	app.post('/login',AuthController.login)

	app.use('/',JwtControllerPolicy.secure)

	app.get('/attendance',AttendanceController.index)
	app.get('/attendance/:id',AttendanceController.show)
	app.post('/attendance',AttendanceControllerPolicy.create,AttendanceController.create)
	app.get('/attendance/:id/children', AttendanceController.showChildrenAttendance)

	app.get('/user',UserController.index)
	app.get('/user/:id',UserController.show)
	app.put('/user/:id',UserController.update)
	app.delete('/user/:id',UserController.delete)
	app.get('/user/:id/children/',UserController.showChildren)
	app.get('/user/:id/attendance/',UserController.showAttendance)
	app.get('/user/:id/events/',UserController.showEvents)
	app.get('/user/:user_id/event/:event_id/attendance/',UserController.showEventAttendance)

	app.get('/event',EventController.index)
	app.get('/event/:id',EventController.show)
	app.post('/event',EventControllerPolicy.create,EventController.create)
	app.put('/event/:id',EventController.update)
	app.delete('/event/:id',EventController.delete)
	app.get('/event/:id/attendance/',EventController.showEventAttendance)

	app.get('/user_event',UserEventController.index)
	app.get('/user_event/:id',UserEventController.show)
	app.post('/user_event',UserEventControllerPolicy.create,UserEventController.create)
	app.put('/user_event/:id',UserEventController.update)
	app.delete('/user_event/:id',UserEventController.delete)
}	
