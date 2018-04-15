module.exports = (sequelize, DataTypes) => 
	sequelize.define('event_types', {
		name: DataTypes.STRING,
		description: DataTypes.STRING
	})
