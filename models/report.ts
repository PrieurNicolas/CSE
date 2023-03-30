
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Report', {
        idReporte: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('id') },
                notEmpty: { msg: concatRequiredMessage('id') }
            }
        },
        raison: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('raison') },
                notEmpty: { msg: concatRequiredMessage('raison') }
            }
        },
        preuve: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('preuve') },
                notEmpty: { msg: concatRequiredMessage('preuve') }
            }
        }
    })
}
