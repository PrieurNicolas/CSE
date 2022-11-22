import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('User', {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: { msg: concatRequiredMessage('Email') },
                notEmpty: { msg: concatRequiredMessage('Email') }
            }
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Password') },
                notEmpty: { msg: concatRequiredMessage('Password') }
            }
        },
        phone: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
            // validate : {
            //     is: /^$|^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/g
            // }
        },
        isActif: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }

    })
}
