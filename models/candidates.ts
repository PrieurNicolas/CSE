
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Candidate', {
        firstname: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('firstname') },
                notEmpty: { msg: concatRequiredMessage('firstname') }
            }
        },
        lastname: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('lastname') },
                notEmpty: { msg: concatRequiredMessage('lastname') }
            }
        },
        birthday: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('birthday date') },
                notEmpty: { msg: concatRequiredMessage('birthday date') }
            }
        },
        wantToBe: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('wantToBe missing') },
                notEmpty: { msg: concatRequiredMessage('wantToBe missing') }
            }
        },
        permis: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
    })
}
