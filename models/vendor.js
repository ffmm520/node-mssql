const {
    Sequelize,
    DataTypes
} = require('sequelize')

const {
    db
} = require('../db/config')

const Vendor = db.define(
    'Vendor', {
        userid: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING
        },
        userpass: {
            type: DataTypes.STRING
        },
        userflag: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'u_user',
        timestamps: false
    }
)


// find()
module.exports = { Vendor }