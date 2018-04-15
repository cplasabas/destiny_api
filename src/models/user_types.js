module.exports = (sequelize, DataTypes) => 
	sequelize.define('user_types', {
		name: DataTypes.STRING,
		description: DataTypes.STRING
	})
