
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Token', {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        refreshToken: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Token') },
                notEmpty: { msg: concatRequiredMessage('Token') }
            }
        },
        tokenPush: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Token') },
                notEmpty: { msg: concatRequiredMessage('Token') }
            }
        }
    })
}
