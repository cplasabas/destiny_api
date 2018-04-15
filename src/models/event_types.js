module.exports = (sequelize, DataTypes) => 
	sequelize.define('event_types', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		createdAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		},
		updatedAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		}
	})
