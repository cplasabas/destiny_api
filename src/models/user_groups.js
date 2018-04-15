module.exports = (sequelize, DataTypes) => 
	sequelize.define('user_groups', {
		name: DataTypes.STRING,
		description: DataTypes.STRING
	})
