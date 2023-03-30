
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Bannis', {
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('email') },
                notEmpty: { msg: concatRequiredMessage('email') }
            }
        },
        raison: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('raison') },
                notEmpty: { msg: concatRequiredMessage('raison') }
            }
        }
    })
}
