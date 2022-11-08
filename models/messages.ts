
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Message', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        message: {
            type: dataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('enter message') },
                notEmpty: { msg: concatRequiredMessage('enter message') }
            }
        }
    })
}
