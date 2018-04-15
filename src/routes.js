const AuthController = require("./controllers/AuthController")
const AuthControllerPolicy = require("./policies/AuthControllerPolicy")
const JwtControllerPolicy = require("./policies/JwtControllerPolicy")
const UserController = require("./controllers/UserController")

module.exports = (app) => {
	app.post('/register',AuthControllerPolicy.register,AuthController.register),
	app.post('/login',AuthController.login),
	app.use('/',JwtControllerPolicy.secure),
	app.get('/users',UserController.show)
}	