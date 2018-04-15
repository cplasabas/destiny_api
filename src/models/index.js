const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require("../config/config")
const db = {}

const sequelize = new Sequelize(
	config.db.database,
	config.db.user,
	config.db.pass,
	config.db.options
)

db.users = require('../models/users.js')(sequelize, Sequelize);
db.user_types = require('../models/user_types.js')(sequelize, Sequelize);
db.user_groups = require('../models/user_groups.js')(sequelize, Sequelize); 
db.events = require('../models/events.js')(sequelize, Sequelize); 
db.event_types = require('../models/event_types.js')(sequelize, Sequelize); 
db.user_events = require('../models/user_events.js')(sequelize, Sequelize); 
db.attendance = require('../models/attendance.js')(sequelize, Sequelize);  

db.users.belongsTo(db.user_types,{foreignKey: 'user_type_id'})
db.users.belongsTo(db.user_groups, {foreignKey: 'user_group_id'})
db.events.belongsTo(db.event_types, {foreignKey: 'event_type_id'})
db.events.belongsTo(db.users,{foreignKey: 'user_id'})
db.user_events.belongsTo(db.users,{foreignKey: 'user_id'})
db.user_events.belongsTo(db.events,{foreignKey: 'event_id'})
db.attendance.belongsTo(db.users,{foreignKey: 'user_id'})
db.attendance.belongsTo(db.events,{foreignKey: 'event_id'})

db.users.hasMany(db.attendance)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
