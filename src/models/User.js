module.exports = (sequelize, DataTypes) => 
	sequelize.define('User', {
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email:{
			type: DataTypes.STRING,
			unique: true
		},
		username:{
			type: DataTypes.STRING,
			unique:true
		},
		password: DataTypes.STRING
	})
