module.exports = (sequelize, DataTypes) => 
	sequelize.define('user_events', {
		joined_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
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
