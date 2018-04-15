const AuthController = require("./controllers/AuthController")
const AuthControllerPolicy = require("./policies/AuthControllerPolicy")
const JwtControllerPolicy = require("./policies/JwtControllerPolicy")
const UserController = require("./controllers/UserController")
const EventController = require("./controllers/EventController")
const AttendanceController = require("./controllers/AttendanceController")

module.exports = (app) => {
	app.post('/register',AuthControllerPolicy.register,AuthController.register)
	app.post('/login',AuthController.login)

	app.use('/',JwtControllerPolicy.secure)

	app.get('/attendance',AttendanceController.index)
	app.get('/attendance/:id',AttendanceController.show)

	app.get('/user/:id/attendance/',UserController.showUserAttendance)
	app.get('/user/:user_id/event/:event_id/attendance/',UserController.showUserEventAttendance)

	app.get('/event/:id/attendance/',EventController.showEventAttendance)
}	