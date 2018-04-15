module.exports = (sequelize, DataTypes) => 
	sequelize.define('attendance', {
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		event_id: {
			type: DataTypes.INTEGER,
			allowNull: false
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
