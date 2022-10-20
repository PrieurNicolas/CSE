
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Employer', {
        siret: {
            type: dataTypes.BIGINT,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('siret') },
                notEmpty: { msg: concatRequiredMessage('siret') }
            }
        },
        structurename: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('structure name') },
                notEmpty: { msg: concatRequiredMessage('structure name') }
            }
        },
    })
}
