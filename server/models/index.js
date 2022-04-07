const User = require('./User');
const Bottle = require('./Bottle');
const Cellar = require('./Cellar');

User.hasOne(Cellar, {
    foreignKey: 'cellarId'
});

User.hasMany(Bottle, {
    foreignKey: 'bottleId'
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
    foreignKey: 'bottleId'
});

module.exports = { User, Bottle, Cellar };
