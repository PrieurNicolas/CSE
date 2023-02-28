import { DataTypes, Sequelize } from "sequelize"
import { tokenTypes } from "../types/token"
import { userTypes } from "../types/user"
import { users } from './mock-user'
import { localisationTypes } from "../types/localisation"
import { candidateTypes } from "../types/candidate"
import { employerTypes } from "../types/employer"
import { degreeTypes } from "../types/degree"
import { roleTypes } from "../types/role"
import { periodTypes } from "../types/period"
import { messageTypes } from "../types/message"
import { candidates } from './mock-candidate'
import { tokens } from './mock-token'
import { localisations } from './mock-localisation'
import { employers } from './mock-employer'
import {degrees} from './mock-degree'
import { roles } from './mock-role'
import { periods } from './mock-period'
import {messages } from './mock-message'

const UserModel = require('../models/users')
const TokenModel = require('../models/tokens')
const LocalisationModel = require('../models/localisations')
const CandidateModel = require('../models/candidates')
const EmployerModel = require('../models/employers')
const DegreeModel = require('../models/degrees')
const RoleModel = require('../models/roles')
const PeriodModel = require('../models/periods')
const PeriodUserModel = require('../models/periodUsers')
const DegreeUserModel = require('../models/degreeUsers')
const RoleUserModel = require('../models/roleUsers')
const MessageModel = require('../models/messages')

export const sequelize = new Sequelize(
//    "DatabaseCse",
//     'alexis',
//     '123456',
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

export const User = UserModel(sequelize, DataTypes)
export const Token = TokenModel(sequelize, DataTypes)
export const Localisation = LocalisationModel(sequelize, DataTypes)
export const Candidate = CandidateModel(sequelize, DataTypes)
export const Employer = EmployerModel(sequelize, DataTypes)
export const Degree = DegreeModel(sequelize, DataTypes)
export const Role = RoleModel(sequelize, DataTypes)
export const Period = PeriodModel(sequelize, DataTypes)
export const PeriodUser = PeriodUserModel(sequelize, DataTypes)
export const DegreeUser = DegreeUserModel(sequelize, DataTypes)
export const RoleUser = RoleUserModel(sequelize, DataTypes)
export const Message = MessageModel(sequelize, DataTypes)


User.hasOne(Token, { onDelete: 'cascade', hooks: true })
Token.belongsTo(User, { onDelete: 'cascade', hooks: true })

Localisation.hasOne(User, { onDelete: 'cascade', hooks: true })
User.belongsTo(Localisation, { onDelete: 'cascade', hooks: true })

User.hasOne(Candidate, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })
Candidate.belongsTo(User, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })

User.hasOne(Employer, { onDelete: 'cascade', hooks: true })
Employer.belongsTo(User, { onDelete: 'cascade', hooks: true })

Degree.belongsToMany(User, { through: DegreeUser })
User.belongsToMany(Degree, { through: DegreeUser })

Role.belongsToMany(User, { through: RoleUser })
User.belongsToMany(Role, { through: RoleUser })

Period.belongsToMany(User, { through: PeriodUser })
User.belongsToMany(Period, { through: PeriodUser })

User.belongsToMany(User, { through: { model: Message, unique: false }, as: "to", foreignKey: "to" })
User.belongsToMany(User, { through: { model: Message, unique: false }, as: "from", foreignKey: "from" })

export const initDb = () => {
    return sequelize.sync({ alter: true }).then(() => {

    })
}
