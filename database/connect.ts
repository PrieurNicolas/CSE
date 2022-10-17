import { DataTypes } from "sequelize"
import { tokenTypes } from "../types/token"
import { userTypes } from "../types/user"
import { localisationTypes } from "../types/localisation"
import { candidateTypes } from "../types/candidate"
import { employerTypes } from "../types/employer"
import { degreeTypes } from "../types/degree"
import { roleTypes } from "../types/role"
import { periodTypes } from "../types/period"
import { periodUserTypes } from "../types/periodUser"
let users = require('../database/mock-user')
let tokens = require('../database/mock-token')
let localisations = require('../database/mock-localisation')
let candidates = require('../database/mock-candidate')
let employers = require('../database/mock-employer')
let degrees = require('../database/mock-degree')
let roles = require('../database/mock-role')
let periods = require('../database/mock-period')
let periodUsers = require('../database/mock-perioduser')
const { Sequelize } = require('sequelize')
const UserModel = require('../models/users')
const TokenModel = require('../models/tokens')
const LocalisationModel = require('../models/localisations')
const CandidateModel = require('../models/candidates')
const EmployerModel = require('../models/employers')
const DegreeModel = require('../models/degrees')
const RoleModel = require('../models/roles')
const PeriodModel = require('../models/periods')
const PeriodUserModel = require('../models/periodUsers')

const sequelize = new Sequelize(
    'sequalize',
    'postgres',
    'admin',
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
const Candidate = CandidateModel(sequelize, DataTypes)
const Employer = EmployerModel(sequelize, DataTypes)
const Degree = DegreeModel(sequelize, DataTypes)
const Role = RoleModel(sequelize, DataTypes)
const Period = PeriodModel(sequelize, DataTypes)
const PeriodUser = PeriodUserModel(sequelize, DataTypes)


const initDb = () => {

    Token.hasOne(User)
    User.belongsTo(Token)

    Localisation.hasOne(User)
    User.belongsTo(Localisation)

    User.hasOne(Candidate, { constraints: false })
    Candidate.belongsTo(User, { constraints: false })

    User.hasOne(Employer, { constraints: false })
    Employer.belongsTo(User, { constraints: false })
    // doit peut être creer model etc pour ceux ci 
    Degree.belongsToMany(User, { through: 'DegreeUser' })
    User.belongsToMany(Degree, { through: 'DegreeUser' })

    Role.belongsToMany(User, { through: 'RoleUser' })
    User.belongsToMany(Role, { through: 'RoleUser' })

    Period.belongsToMany(User, { through: PeriodUser })
    User.belongsToMany(Period, { through: PeriodUser })

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
            User.create({
                email: user.email,
                phone: user.phone,
                isActif: user.isActif,
                password: user.password,
                TokenId: user.TokenId,
                LocalisationId: user.LocalisationId
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        candidates.map((candidate: candidateTypes) => {
            Candidate.create({
                UserId: candidate.userId,
                firstname: candidate.firstname,
                lastname: candidate.lastname,
                birthday: candidate.birthday
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        employers.map((employer: employerTypes) => {
            Employer.create({
                UserId: employer.userId,
                siret: employer.siret,
                structurename: employer.structurename
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        
        periods.map((period: periodTypes) => {
            Period.create({
                periodname: period.periodname
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        roles.map((role: roleTypes) => {
            Role.create({
                role: role.role
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        degrees.map((degree: degreeTypes) => {
            Degree.create({
                degreename: degree.degreename
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        periodUsers.map((periodUser: periodUserTypes) => {
            PeriodUser.create({
                PeriodId: periodUser.PeriodId,
                UserId: periodUser.UserId
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })



        console.log('Database created')
    })
}

module.exports = {
    initDb,
    User,
    Token
}