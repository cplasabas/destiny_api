module.exports = (sequelize, DataTypes) => 
	sequelize.define('events', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		is_private: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false
		},
		event_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		user_id: {
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
