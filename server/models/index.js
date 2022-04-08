const User = require('./User');
const Bottle = require('./Bottle');
const Cellar = require('./Cellar');

User.hasOne(Cellar, {
    foreignKey: 'userId'
});

User.hasMany(Bottle, {
    foreignKey: 'userId'
});

Cellar.belongsTo(User, {
    foreignKey: 'userId'
});

Bottle.belongsTo(User, {
    foreignKey: 'userId'
});

Bottle.belongsTo(Cellar, {
    foreignKey: 'cellarId'
});

Cellar.hasMany(Bottle, {
    foreignKey: 'cellarId'
});

module.exports = { User, Bottle, Cellar };
