
import {  DataTypes, Sequelize, STRING } from "sequelize"


module.exports = (sequelize : Sequelize, dataTypes : typeof DataTypes) => {

    const concatRequiredMessage = (data : string) => {
        return `${data} is required`
    }

    return sequelize.define('Period', {
        periodname: {
            type : dataTypes.STRING,
            allowNull: false,
            validate : {
                notNull: { msg : concatRequiredMessage('period name')},
                notEmpty: { msg : concatRequiredMessage('period name')}
            }
        },
    })
}
