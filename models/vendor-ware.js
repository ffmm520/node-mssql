const {
    Sequelize,
    DataTypes
} = require('sequelize')

const {
    db
} = require('../db/config')

const VendorWare = db.define(
    'VendorWare', {
        userid: {
            type: DataTypes.STRING
        },
        wareid: {
            type: DataTypes.STRING
        },
        inused: {
            type: DataTypes.NUMBER
        }
    }, {
        tableName: 'u_user_ware',
        timestamps: false
    }
)


// find()
module.exports = { VendorWare }