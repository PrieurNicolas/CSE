import { DataTypes } from "sequelize"
import { tokenTypes } from "../types/token"
import { userTypes } from "../types/user"
import { localisationTypes } from "../types/localisation"
let users = require('../database/mock-user')
let tokens = require('../database/mock-token')
let localisations = require('../database/mock-localisation')
const { Sequelize } = require('sequelize')
const UserModel = require('../models/users')
const TokenModel = require('../models/tokens')
const LocalisationModel = require('../models/localisations')
const bcrypt= require('bcrypt');

const sequelize = new Sequelize(
    `${process.env.NAME_DATABASE}`,
    `${process.env.HOST_DATABASE}`,
    `${process.env.PASS_DATABASE}`,
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        dialectOptions: {
            useUTC: false,
            dateStrings: true,
            typeCast: true
        },
        timezone: '+02:00'
    }
)

sequelize.authenticate()
    .then(() => console.log('Link established'))
    .catch((error: Error) => console.error(`Error: ${error}`)
    )

const User = UserModel(sequelize, DataTypes)
const Token = TokenModel(sequelize, DataTypes)
const Localisation = LocalisationModel(sequelize, DataTypes)

const initDb = () => {

    Token.hasOne(User)
    User.belongsTo(Token)

    Localisation.hasOne(User)
    User.belongsTo(Localisation)

    return sequelize.sync({ force: true }).then(() => {
        tokens.map((token: tokenTypes) => {
            Token.create({
                refreshToken: token.refreshToken,
                tokenPush: token.tokenPush
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        localisations.map((localisation: localisationTypes) => {
            Localisation.create({
                address: localisation.address,
                zipCode: localisation.zipCode,
                city: localisation.city
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        users.map((user: userTypes) => {
        bcrypt.hash(user.password, 10).then((hash: typeof bcrypt) => {
            User.create({
                email: user.email,
                phone: user.phone,
                isActif: user.isActif,
                password: hash,
                TokenId: user.TokenId,
                LocalisationId: user.LocalisationId
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        })


        console.log('Database created')
    })
}

module.exports = {
    initDb,
    User,
    Token
}