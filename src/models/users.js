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
		password: DataTypes.STRING,
		contact: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		level: DataTypes.INTEGER,
		parent: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		createdAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		},
		updatedAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		}
	})
