module.exports = (sequelize, DataTypes) => 
	sequelize.define('events', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		is_private: DataTypes.INTEGER
	})
