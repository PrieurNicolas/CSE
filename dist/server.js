"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// database/mock-user.ts
var users;
var init_mock_user = __esm({
  "database/mock-user.ts"() {
    "use strict";
    users = [
      {
        email: "cse@cse.com",
        phone: 800000001,
        isActif: true,
        password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
        LocalisationId: 1
      },
      {
        email: "test@gmail.com",
        phone: 111111112,
        isActif: true,
        password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
        LocalisationId: 2
      },
      {
        email: "s@gmail.com",
        phone: 111111111,
        isActif: true,
        password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
        LocalisationId: 3
      }
    ];
  }
});

// database/mock-candidate.ts
var candidates;
var init_mock_candidate = __esm({
  "database/mock-candidate.ts"() {
    "use strict";
    candidates = [
      {
        UserId: 1,
        firstname: "gaetan",
        lastname: "pierru",
        birthday: new Date("2000-01-20"),
        wantToBe: "animateur"
      },
      {
        UserId: 2,
        firstname: "nicolas",
        lastname: "prieur",
        birthday: new Date("2001-05-15"),
        wantToBe: "directeur"
      }
    ];
  }
});

// database/mock-token.ts
var tokens;
var init_mock_token = __esm({
  "database/mock-token.ts"() {
    "use strict";
    tokens = [
      {
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWnVsIiwiaWF0IjoxNjY0Nzg2ODMyfQ.oXdMRVtXuigBJhQics70gaoMohXmK4bYIGZG-yUrstA",
        tokenPush: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        UserId: 1
      },
      {
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2Frb3UiLCJpYXQiOjE2NjQ4ODkxMTN9.gYJnG68z8Rf8ZkP0260LYxm3ILv_oMZNCZ2o1U1uGV0",
        tokenPush: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG8iLCJpYXQiOjE1MTYyMzkwMjJ9.9twuPVu9Wj3PBneGw1ctrf3knr7RX12v-UwocfLhXIs",
        UserId: 2
      }
    ];
  }
});

// database/mock-localisation.ts
var localisations;
var init_mock_localisation = __esm({
  "database/mock-localisation.ts"() {
    "use strict";
    localisations = [
      {
        address: "cse",
        zipCode: 62200,
        city: "Boulogne"
      },
      {
        address: "test",
        zipCode: 62200,
        city: "Boulogne  sur mer"
      },
      {
        address: "a",
        zipCode: 62200,
        city: "Boulogne  sur mer"
      }
    ];
  }
});

// database/mock-employer.ts
var employers;
var init_mock_employer = __esm({
  "database/mock-employer.ts"() {
    "use strict";
    employers = [
      {
        siret: BigInt(79279132900016),
        structurename: "simplon",
        UserId: 3
      }
    ];
  }
});

// database/mock-degree.ts
var degrees;
var init_mock_degree = __esm({
  "database/mock-degree.ts"() {
    "use strict";
    degrees = [
      {
        degreename: "BAFD"
      },
      {
        degreename: "BAFD en cours"
      },
      {
        degreename: "BAFA"
      },
      {
        degreename: "stage pratique"
      },
      {
        degreename: "Non diplome"
      },
      {
        degreename: "BPJEPS"
      }
    ];
  }
});

// database/mock-role.ts
var roles;
var init_mock_role = __esm({
  "database/mock-role.ts"() {
    "use strict";
    roles = [
      {
        role: "ADMIN"
      },
      {
        role: "CANDIDAT"
      },
      {
        role: "ENTREPRISE"
      }
    ];
  }
});

// database/mock-period.ts
var periods;
var init_mock_period = __esm({
  "database/mock-period.ts"() {
    "use strict";
    periods = [
      {
        periodname: "Vacances de f\xE9vrier"
      },
      {
        periodname: "Vacances d\u2019avril "
      },
      {
        periodname: "Vacances juillet"
      },
      {
        periodname: "Vacances Ao\xFBt"
      },
      {
        periodname: "Vacances Octobre"
      },
      {
        periodname: "Vacances No\xEBl"
      },
      {
        periodname: "Mercredi"
      },
      {
        periodname: "Samedi"
      }
    ];
  }
});

// database/mock-message.ts
var messages;
var init_mock_message = __esm({
  "database/mock-message.ts"() {
    "use strict";
    messages = [
      {
        message: "salut :)",
        to: 1,
        from: 3,
        createdAt: new Date()
      },
      {
        message: "salut comment ca  va :)",
        to: 3,
        from: 1,
        createdAt: new Date()
      },
      {
        message: "bien",
        to: 1,
        from: 3,
        createdAt: new Date()
      }
    ];
  }
});

// models/users.ts
var require_users = __commonJS({
  "models/users.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("User", {
        id: {
          type: dataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        email: {
          type: dataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
            notNull: { msg: concatRequiredMessage("Email") },
            notEmpty: { msg: concatRequiredMessage("Email") }
          }
        },
        password: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("Password") },
            notEmpty: { msg: concatRequiredMessage("Password") }
          }
        },
        phone: {
          type: dataTypes.INTEGER,
          allowNull: false,
          unique: true
        },
        isActif: {
          type: dataTypes.BOOLEAN,
          allowNull: false
        }
      });
    };
  }
});

// models/tokens.ts
var require_tokens = __commonJS({
  "models/tokens.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("Token", {
        id: {
          type: dataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        refreshToken: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("Token") },
            notEmpty: { msg: concatRequiredMessage("Token") }
          }
        },
        tokenPush: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("Token") },
            notEmpty: { msg: concatRequiredMessage("Token") }
          }
        }
      });
    };
  }
});

// models/localisations.ts
var require_localisations = __commonJS({
  "models/localisations.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("Localisation", {
        id: {
          type: dataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        address: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("address") },
            notEmpty: { msg: concatRequiredMessage("address") }
          }
        },
        zipCode: {
          type: dataTypes.INTEGER,
          allowNull: false
        },
        city: {
          type: dataTypes.STRING,
          allowNull: false
        }
      });
    };
  }
});

// models/candidates.ts
var require_candidates = __commonJS({
  "models/candidates.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("Candidate", {
        firstname: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("firstname") },
            notEmpty: { msg: concatRequiredMessage("firstname") }
          }
        },
        lastname: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("lastname") },
            notEmpty: { msg: concatRequiredMessage("lastname") }
          }
        },
        birthday: {
          type: dataTypes.DATE,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("birthday date") },
            notEmpty: { msg: concatRequiredMessage("birthday date") }
          }
        },
        wantToBe: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("wantToBe missing") },
            notEmpty: { msg: concatRequiredMessage("wantToBe missing") }
          }
        }
      });
    };
  }
});

// models/employers.ts
var require_employers = __commonJS({
  "models/employers.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("Employer", {
        siret: {
          type: dataTypes.BIGINT,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("siret") },
            notEmpty: { msg: concatRequiredMessage("siret") }
          }
        },
        structurename: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("structure name") },
            notEmpty: { msg: concatRequiredMessage("structure name") }
          }
        }
      });
    };
  }
});

// models/degrees.ts
var require_degrees = __commonJS({
  "models/degrees.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("Degree", {
        degreename: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("degree name") },
            notEmpty: { msg: concatRequiredMessage("degree name") }
          }
        }
      });
    };
  }
});

// models/roles.ts
var require_roles = __commonJS({
  "models/roles.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("Role", {
        role: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("role name") },
            notEmpty: { msg: concatRequiredMessage("role name") }
          }
        }
      });
    };
  }
});

// models/periods.ts
var require_periods = __commonJS({
  "models/periods.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("Period", {
        periodname: {
          type: dataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("period name") },
            notEmpty: { msg: concatRequiredMessage("period name") }
          }
        }
      });
    };
  }
});

// models/periodUsers.ts
var require_periodUsers = __commonJS({
  "models/periodUsers.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2) => {
      return sequelize2.define("PeriodUser", {});
    };
  }
});

// models/degreeUsers.ts
var require_degreeUsers = __commonJS({
  "models/degreeUsers.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2) => {
      return sequelize2.define("DegreeUser", {});
    };
  }
});

// models/roleUsers.ts
var require_roleUsers = __commonJS({
  "models/roleUsers.ts"(exports, module2) {
    "use strict";
    module2.exports = (sequelize2) => {
      return sequelize2.define("RoleUser", {});
    };
  }
});

// models/messages.ts
var require_messages = __commonJS({
  "models/messages.ts"(exports, module2) {
    "use strict";
    var import_sequelize10 = require("sequelize");
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("Message", {
        id: {
          type: import_sequelize10.DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        message: {
          type: dataTypes.TEXT,
          allowNull: false,
          validate: {
            notNull: { msg: concatRequiredMessage("enter message") },
            notEmpty: { msg: concatRequiredMessage("enter message") }
          }
        }
      });
    };
  }
});

// database/connect.ts
var connect_exports = {};
__export(connect_exports, {
  Candidate: () => Candidate,
  Degree: () => Degree,
  DegreeUser: () => DegreeUser,
  Employer: () => Employer,
  Localisation: () => Localisation,
  Message: () => Message,
  Period: () => Period,
  PeriodUser: () => PeriodUser,
  Role: () => Role,
  RoleUser: () => RoleUser,
  Token: () => Token,
  User: () => User,
  initDb: () => initDb
});
var import_sequelize, UserModel, TokenModel, LocalisationModel, CandidateModel, EmployerModel, DegreeModel, RoleModel, PeriodModel, PeriodUserModel, DegreeUserModel, RoleUserModel, MessageModel, sequelize, User, Token, Localisation, Candidate, Employer, Degree, Role, Period, PeriodUser, DegreeUser, RoleUser, Message, initDb;
var init_connect = __esm({
  "database/connect.ts"() {
    "use strict";
    import_sequelize = require("sequelize");
    init_mock_user();
    init_mock_candidate();
    init_mock_token();
    init_mock_localisation();
    init_mock_employer();
    init_mock_degree();
    init_mock_role();
    init_mock_period();
    init_mock_message();
    UserModel = require_users();
    TokenModel = require_tokens();
    LocalisationModel = require_localisations();
    CandidateModel = require_candidates();
    EmployerModel = require_employers();
    DegreeModel = require_degrees();
    RoleModel = require_roles();
    PeriodModel = require_periods();
    PeriodUserModel = require_periodUsers();
    DegreeUserModel = require_degreeUsers();
    RoleUserModel = require_roleUsers();
    MessageModel = require_messages();
    sequelize = new import_sequelize.Sequelize(
      "DatabaseCse",
      "alexis",
      "123456",
      {
        host: "localhost",
        dialect: "postgres",
        port: 5432,
        dialectOptions: {
          useUTC: false,
          dateStrings: true,
          typeCast: true
        },
        timezone: "+02:00"
      }
    );
    sequelize.authenticate().then(() => console.log("Link established")).catch(
      (error) => console.error(`Error: ${error}`)
    );
    User = UserModel(sequelize, import_sequelize.DataTypes);
    Token = TokenModel(sequelize, import_sequelize.DataTypes);
    Localisation = LocalisationModel(sequelize, import_sequelize.DataTypes);
    Candidate = CandidateModel(sequelize, import_sequelize.DataTypes);
    Employer = EmployerModel(sequelize, import_sequelize.DataTypes);
    Degree = DegreeModel(sequelize, import_sequelize.DataTypes);
    Role = RoleModel(sequelize, import_sequelize.DataTypes);
    Period = PeriodModel(sequelize, import_sequelize.DataTypes);
    PeriodUser = PeriodUserModel(sequelize, import_sequelize.DataTypes);
    DegreeUser = DegreeUserModel(sequelize, import_sequelize.DataTypes);
    RoleUser = RoleUserModel(sequelize, import_sequelize.DataTypes);
    Message = MessageModel(sequelize, import_sequelize.DataTypes);
    User.hasOne(Token, { onDelete: "cascade", hooks: true });
    Token.belongsTo(User, { onDelete: "cascade", hooks: true });
    Localisation.hasOne(User, { onDelete: "cascade", hooks: true });
    User.belongsTo(Localisation, { onDelete: "cascade", hooks: true });
    User.hasOne(Candidate, { foreignKey: "UserId", onDelete: "cascade", hooks: true });
    Candidate.belongsTo(User, { foreignKey: "UserId", onDelete: "cascade", hooks: true });
    User.hasOne(Employer, { onDelete: "cascade", hooks: true });
    Employer.belongsTo(User, { onDelete: "cascade", hooks: true });
    Degree.belongsToMany(User, { through: DegreeUser });
    User.belongsToMany(Degree, { through: DegreeUser });
    Role.belongsToMany(User, { through: RoleUser });
    User.belongsToMany(Role, { through: RoleUser });
    Period.belongsToMany(User, { through: PeriodUser });
    User.belongsToMany(Period, { through: PeriodUser });
    User.belongsToMany(User, { through: { model: Message, unique: false }, as: "to", foreignKey: "to" });
    User.belongsToMany(User, { through: { model: Message, unique: false }, as: "from", foreignKey: "from" });
    initDb = () => {
      return sequelize.sync({ force: true }).then(() => {
        localisations.map((localisation) => {
          Localisation.create({
            address: localisation.address,
            zipCode: localisation.zipCode,
            city: localisation.city
          }).then((response) => console.log(response.toJSON()));
        });
        periods.map((period) => {
          Period.create({
            periodname: period.periodname
          }).then((response) => console.log(response.toJSON()));
        });
        roles.map((role) => {
          Role.create({
            role: role.role
          }).then((response) => console.log(response.toJSON()));
        });
        degrees.map((degree) => {
          Degree.create({
            degreename: degree.degreename
          }).then((response) => console.log(response.toJSON()));
        });
        users.map((user, index) => {
          User.create({
            email: user.email,
            phone: user.phone,
            isActif: user.isActif,
            password: user.password,
            LocalisationId: user.LocalisationId
          }).then(async (req) => {
            for (let i = 0; i < 10; i++) {
              const periodRow = await Period.findByPk(Math.floor(Math.random() * (Object.keys(Period).length - 1 + 1) + 1));
              await req.addPeriod(periodRow, { through: PeriodUser });
            }
            const roleRow = await Role.findByPk(index + 1);
            await req.addRole(roleRow, { through: RoleUser });
            const degreeRow = await Degree.findByPk(index + 1);
            await req.addDegree(degreeRow, { through: DegreeUser });
          });
        });
        tokens.map((token) => {
          Token.create({
            refreshToken: token.refreshToken,
            tokenPush: token.tokenPush,
            UserId: token.UserId
          }).then((response) => console.log(response.toJSON()));
        });
        candidates.map((candidate, index) => {
          Candidate.create({
            firstname: candidate.firstname,
            lastname: candidate.lastname,
            birthday: candidate.birthday,
            wantToBe: candidate.wantToBe,
            UserId: index + 1
          }).then((response) => console.log(response.toJSON()));
        });
        employers.map((employer) => {
          Employer.create({
            UserId: 3,
            siret: employer.siret,
            structurename: employer.structurename
          }).then((response) => console.log(response.toJSON()));
        });
        messages.map((message) => {
          Message.create({
            from: message.from,
            to: message.to,
            message: message.message
          }).then((response) => console.log(response.toJSON()));
        });
        console.log("Database created");
      });
    };
  }
});

// controllers/employerController.ts
var import_express, import_sequelize2, import_bcrypt, employerController;
var init_employerController = __esm({
  "controllers/employerController.ts"() {
    "use strict";
    import_express = require("express");
    import_sequelize2 = require("sequelize");
    init_connect();
    import_bcrypt = __toESM(require("bcrypt"));
    employerController = (0, import_express.Router)();
    employerController.post("/", async (req, res) => {
      if (!req.body.users.password)
        return res.status(400).json({ passwordRequired: true, message: "Mot de passe requis." });
      if (req.body.users.password !== req.body.users.passwordconf)
        return res.status(400).json({ passwordRequired: true, message: "Mot de passe doit \xEAtre identique." });
      req.body.users.password = await import_bcrypt.default.hash(req.body.users.password, 10);
      try {
        User.create(req.body.users).then(async (user) => {
          Employer.create(req.body.employer).then((e) => {
            e.setUser(user);
          });
          Localisation.create(req.body.localisation).then((local) => {
            user.setLocalisation(local);
          });
          req.body.periods.map(async (period) => {
            const periodRow = await Period.findByPk(period.id);
            user.addPeriod(periodRow, { through: PeriodUser });
          });
          const roleRow = await Role.findByPk(3);
          user.addRole(roleRow, { through: RoleUser });
        }).then((employer) => {
          const message = `employeur cr\xE9\xE9 avec succes.`;
          res.json({ message, data: employer });
        }).catch((error) => {
          if (error instanceof import_sequelize2.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Echec lors de la cr\xE9ation de l'employeur.`;
          res.status(500).json({ message, data: error });
        });
      } catch (error) {
        return res.json(error);
      }
    });
    employerController.delete("/:id", async (req, res) => {
      Employer.findByPk(req.params.id).then(async (employer) => {
        if (employer === null) {
          const message = "L'employeur demand\xE9 n'existe pas. R\xE9essayer avec un autre identifiant.";
          return res.status(404).json({ message });
        }
        const employerDeleted = employer;
        let local = await User.findByPk(employerDeleted.UserId);
        return User.destroy({
          where: { id: employer.UserId }
        }).then(() => {
          Localisation.destroy({
            where: { id: local.LocalisationId }
          });
          const message = `L'employeur avec l'identifiant n\xB0${employerDeleted.id} a bien \xE9t\xE9 supprim\xE9.`;
          res.json({ message, data: employerDeleted });
        });
      }).catch((error) => {
        const message = `L'employeur n'a pas pu \xEAtre supprim\xE9. R\xE9essayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
    });
    employerController.get("/", async (req, res) => {
      Employer.findAll({
        include: [
          {
            model: User,
            required: false,
            include: {
              model: Localisation,
              require: false
            }
          }
        ]
      }).then((employers2) => {
        res.status(200).json(employers2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    employerController.get("/:id", async (req, res) => {
      Employer.findByPk(req.params.id, {
        include: [
          {
            model: User,
            required: false,
            include: [
              {
                model: Localisation,
                require: false
              },
              {
                model: Period,
                require: false
              },
              {
                model: Role,
                require: false
              }
            ]
          }
        ]
      }).then((employers2) => {
        res.status(200).json(employers2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    employerController.put("/:id", async (req, res) => {
      Employer.update(req.body, {
        where: { id: req.params.id }
      }).then((employer) => {
        if (employer === null) {
          const message2 = "L'employeur n'existe pas.";
          return res.status(404).json({ message: message2 });
        }
        const message = `Employeur mise \xE0 jour`;
        res.json({ message, data: employer });
      }).catch((error) => {
        if (error instanceof import_sequelize2.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec lors de la mise \xE0 jour de l'employeur.`;
        res.status(500).json({ message, data: error });
      });
    });
    employerController.put("/form/:id", async (req, res) => {
      if (!req.body.users.password)
        return res.status(400).json({ passwordRequired: true, message: "Mot de passe requis." });
      if (req.body.users.password !== req.body.users.passwordconf)
        return res.status(400).json({ passwordRequired: true, message: "Mot de passe doit \xEAtre identique." });
      try {
        Employer.update(req.body.employer, { where: { id: req.params.id } }).then(() => {
          Employer.findByPk(req.params.id).then((employer) => {
            User.update(req.body.users, { where: { id: employer.UserId } }).then(() => {
              User.findByPk(employer.UserId).then((user) => {
                var _a;
                PeriodUser.destroy({ where: { UserId: user.id } });
                (_a = req.body.periods) == null ? void 0 : _a.map(async (DispoMap) => {
                  const DisponibiliteRow = await Period.findByPk(DispoMap.id);
                  await user.addPeriod(DisponibiliteRow, { through: PeriodUser });
                });
                Localisation.update(req.body.localisation, {
                  where: { id: user.LocalisationId }
                });
              });
            });
          });
        });
        Employer.findByPk(req.params.id, {
          include: [
            {
              model: User,
              required: false,
              include: [
                {
                  model: Period,
                  required: false
                }
              ]
            }
          ]
        }).then((employer) => {
          const message = "L'employeur \xE0 bien \xE9t\xE9 mis \xE0 jour";
          res.json({ message, data: employer });
        }).catch((error) => {
          if (error instanceof import_sequelize2.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `L'employeur n'a pas pu \xEAtre ajout\xE9. R\xE9essayer dans quelques instants.`;
          res.status(500).json({ message, data: error });
        });
      } catch (error) {
        return res.json(error);
      }
    });
  }
});

// controllers/degreeController.ts
var import_express2, import_sequelize3, degreeController;
var init_degreeController = __esm({
  "controllers/degreeController.ts"() {
    "use strict";
    import_express2 = require("express");
    import_sequelize3 = require("sequelize");
    init_connect();
    degreeController = (0, import_express2.Router)();
    degreeController.post("/", async (req, res) => {
      Degree.create(req.body).then((degree) => {
        const message = `Diplome cr\xE9er avec succes.`;
        res.json({ message, data: degree });
      }).catch((error) => {
        if (error instanceof import_sequelize3.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec lors de l'enregistrement du diplome.`;
        res.status(500).json({ message, data: error });
      });
    });
    degreeController.delete("/:id", async (req, res) => {
      return Degree.destroy({
        where: { id: req.params.id }
      }).then((degree) => {
        const message = `Le diplome avec l'identifiant n\xB0${req.params.id} a bien \xE9t\xE9 supprim\xE9.`;
        res.json({ message, data: degree });
      });
    });
    degreeController.get("/", async (req, res) => {
      Degree.findAll().then((candidates2) => {
        res.status(200).json(candidates2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    degreeController.get("/:id", async (req, res) => {
      Degree.findByPk(req.params.id).then((candidates2) => {
        res.status(200).json(candidates2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    degreeController.put("/:id", async (req, res) => {
      Degree.update(req.body, {
        where: { id: req.params.id }
      }).then(() => {
        const message = `Diplome mis \xE0 jour`;
        res.json({ message });
      }).catch((error) => {
        if (error instanceof import_sequelize3.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec lors de la mise \xE0 jour du diplome.`;
        res.status(500).json({ message, data: error });
      });
    });
  }
});

// controllers/candidateController.ts
var import_express3, import_sequelize4, import_bcrypt2, candidateController;
var init_candidateController = __esm({
  "controllers/candidateController.ts"() {
    "use strict";
    import_express3 = require("express");
    import_sequelize4 = require("sequelize");
    init_connect();
    import_bcrypt2 = __toESM(require("bcrypt"));
    candidateController = (0, import_express3.Router)();
    candidateController.post("/", async (req, res) => {
      if (!req.body.users.password)
        return res.status(400).json({ passwordRequired: true, message: "Mot de passe requis." });
      if (req.body.users.password !== req.body.users.passwordconf)
        return res.status(400).json({ passwordRequired: true, message: "Mot de passe doit \xEAtre identique." });
      req.body.users.password = await import_bcrypt2.default.hash(req.body.users.password, 10);
      try {
        User.create(req.body.users).then(async (user) => {
          var _a;
          Candidate.create(req.body.candidate).then((c) => {
            c.setUser(user);
          });
          Localisation.create(req.body.localisation).then((local) => {
            user.setLocalisation(local);
          });
          (_a = req.body.periods) == null ? void 0 : _a.map(async (period) => {
            const periodRow = await Period.findByPk(period.id);
            user.addPeriod(periodRow, { through: PeriodUser });
          });
          req.body.degrees ? req.body.degrees.map(async (degree) => {
            const degreeRow = await Degree.findByPk(degree.id);
            user.addDegree(degreeRow, { through: DegreeUser });
          }) : user.addDegree(await Degree.findByPk(5), { through: DegreeUser });
          const roleRow = await Role.findByPk(2);
          user.addRole(roleRow, { through: RoleUser });
        }).then((candidates2) => {
          const message = `Candidat cr\xE9\xE9 avec succes.`;
          res.json({ message, data: candidates2 });
        }).catch((error) => {
          if (error instanceof import_sequelize4.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Echec lors de la cr\xE9ation du candidat.`;
          res.status(500).json({ message, data: error });
        });
      } catch (error) {
        return res.json(error);
      }
    });
    candidateController.delete("/:id", async (req, res) => {
      Candidate.findByPk(req.params.id).then(async (candidat) => {
        if (candidat === null) {
          const message = "Le Candidat demand\xE9 n'existe pas. R\xE9essayer avec un autre identifiant.";
          return res.status(404).json({ message });
        }
        const candidatDeleted = candidat;
        let local = await User.findByPk(candidatDeleted.UserId);
        return User.destroy({
          where: { id: candidat.UserId }
        }).then(() => {
          Localisation.destroy({
            where: { id: local.LocalisationId }
          });
          const message = `Le Candidat avec l'identifiant n\xB0${candidatDeleted.id} a bien \xE9t\xE9 supprim\xE9.`;
          res.json({ message, data: candidatDeleted });
        });
      }).catch((error) => {
        const message = `Le Candidat n'a pas pu \xEAtre supprim\xE9. R\xE9essayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
    });
    candidateController.get("/", async (req, res) => {
      Candidate.findAll({
        include: [
          {
            model: User,
            required: false,
            include: {
              model: Localisation,
              require: false
            }
          }
        ]
      }).then((candidates2) => {
        res.status(200).json(candidates2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    candidateController.get("/:id", async (req, res) => {
      Candidate.findByPk(req.params.id, {
        include: [
          {
            model: User,
            required: false,
            include: [
              {
                model: Localisation,
                require: false
              },
              {
                model: Degree,
                require: false
              },
              {
                model: Period,
                require: false
              },
              {
                model: Role,
                require: false
              }
            ]
          }
        ]
      }).then((candidates2) => {
        res.status(200).json(candidates2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    candidateController.put("/:id", async (req, res) => {
      Candidate.update(req.body, {
        where: { id: req.params.id }
      }).then((candidate) => {
        if (candidate === null) {
          const message2 = "Requested user does not exist.";
          return res.status(404).json({ message: message2 });
        }
        const message = `Candidate successfully updated`;
        res.json({ message, data: candidate });
      }).catch((error) => {
        if (error instanceof import_sequelize4.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Could not update the candidate.`;
        res.status(500).json({ message, data: error });
      });
    });
    candidateController.put("/form/:id", async (req, res) => {
      if (!req.body.users.password)
        return res.status(400).json({ passwordRequired: true, message: "Mot de passe requis." });
      if (req.body.users.password !== req.body.users.passwordconf)
        return res.status(400).json({ passwordRequired: true, message: "Mot de passe doit \xEAtre identique." });
      try {
        Candidate.update(req.body.candidate, { where: { id: req.params.id } }).then(() => {
          Candidate.findByPk(req.params.id).then((candidat) => {
            User.update(req.body.users, { where: { id: candidat.UserId } }).then(() => {
              User.findByPk(candidat.UserId).then((user) => {
                var _a, _b;
                PeriodUser.destroy({ where: { UserId: user.id } });
                (_a = req.body.periods) == null ? void 0 : _a.map(async (DispoMap) => {
                  const DisponibiliteRow = await Period.findByPk(DispoMap.id);
                  await user.addPeriod(DisponibiliteRow, { through: PeriodUser });
                });
                DegreeUser.destroy({ where: { UserId: user.id } });
                (_b = req.body.degrees) == null ? void 0 : _b.map(async (DiploMap) => {
                  const DiplomeRow = await Degree.findByPk(DiploMap.id);
                  await user.addDegree(DiplomeRow, { through: DegreeUser });
                });
                Localisation.update(req.body.localisation, {
                  where: { id: user.LocalisationId }
                });
              });
            });
          });
        });
        Candidate.findByPk(req.params.id, {
          include: [
            {
              model: User,
              required: false,
              include: [
                {
                  model: Degree,
                  required: false
                },
                {
                  model: Period,
                  required: false
                }
              ]
            }
          ]
        }).then((candidats) => {
          const message = "Le candidat \xE0 bien \xE9t\xE9 mis \xE0 jour";
          res.json({ message, data: candidats });
        }).catch((error) => {
          if (error instanceof import_sequelize4.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Le Candidat n'a pas pu \xEAtre ajout\xE9. R\xE9essayer dans quelques instants.`;
          res.status(500).json({ message, data: error });
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    });
  }
});

// controllers/adminController.ts
var import_express4, import_sequelize5, import_bcrypt3, adminController;
var init_adminController = __esm({
  "controllers/adminController.ts"() {
    "use strict";
    import_express4 = require("express");
    import_sequelize5 = require("sequelize");
    init_connect();
    import_bcrypt3 = __toESM(require("bcrypt"));
    adminController = (0, import_express4.Router)();
    adminController.post("/", async (req, res) => {
      if (!req.body.password)
        return res.status(400).json({ passwordRequired: true, message: "Mot de passe requis." });
      req.body.password = await import_bcrypt3.default.hash(req.body.password, 10);
      User.create({ ...req.body }).then(async (user) => {
        const roleRow = await Role.findByPk(1);
        user.addRole(roleRow, { through: RoleUser });
        const message = `Utilisateur cr\xE9\xE9 avec succes.`;
        res.json({ message, data: user });
      }).catch((error) => {
        if (error instanceof import_sequelize5.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec la de la cr\xE9ation de l'utilisateur.`;
        res.status(500).json({ message, data: error });
      });
    });
    adminController.get("/all", async (req, res) => {
      User.findAll({
        include: [
          {
            model: Role
          }
        ],
        attributes: { exclude: ["password"] }
      }).then((users2) => {
        let admins = users2.filter((user) => {
          var _a;
          return ((_a = user.Roles[0]) == null ? void 0 : _a.id) == 1;
        });
        res.status(200).json(admins);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
  }
});

// controllers/userController.ts
var import_express5, import_sequelize6, import_bcrypt4, usersController;
var init_userController = __esm({
  "controllers/userController.ts"() {
    "use strict";
    import_express5 = require("express");
    init_connect();
    import_sequelize6 = require("sequelize");
    import_bcrypt4 = __toESM(require("bcrypt"));
    init_adminController();
    usersController = (0, import_express5.Router)();
    usersController.get("/", async (req, res) => {
      User.findAll({
        include: [
          {
            model: Degree,
            required: false
          },
          {
            model: Localisation,
            required: false
          },
          {
            model: Role,
            required: false
          }
        ]
      }).then((users2) => {
        res.status(200).json(users2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    usersController.post("/", async (req, res) => {
      const { phone, email, isActif } = req.body;
      if (!req.body.password)
        return res.status(400).json({ passwordRequired: true, message: "Password is required." });
      req.body.password = await import_bcrypt4.default.hash(req.body.password, 10);
      User.create(req.body).then((user) => {
        const message = `Utilisateur cr\xE9\xE9 avec succes.`;
        res.json({ message, data: user });
      }).catch((error) => {
        if (error instanceof import_sequelize6.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec Utilisateur non cr\xE9\xE9.`;
        res.status(500).json({ message, data: error });
      });
    });
    usersController.delete("/:id", (req, res) => {
      User.findByPk(req.params.id).then((user) => {
        if (user === null) {
          const message = "L'utilisateur n'existe pas.";
          return res.status(404).json({ message });
        }
        const userDeleted = user;
        return User.destroy({
          where: { id: user.id }
        }).then(() => {
          const message = `Utilisateur ${userDeleted.id} supprim\xE9 avec succes.`;
          res.json({ message, data: userDeleted });
        });
      }).catch((error) => {
        const message = `Echec lors de la suppression de l'Utilisateur`;
        res.status(500).json({ message, data: error });
      });
    });
    usersController.get("/:id", async (req, res) => {
      User.findByPk(req.params.id).then((user) => {
        if (user === null) {
          const message2 = "L'utilisateur n'existe pas.";
          return res.status(404).json({ message: message2 });
        }
        const message = "Utilisateur trouv\xE9.";
        res.json({ message, data: user });
      }).catch((error) => {
        const message = "Echec Utilisateur non trouv\xE9.";
        res.status(500).json({ message, data: error });
      });
    });
    usersController.put("/:id", async (req, res) => {
      const id = req.params.id;
      const { phone, email, isActif } = req.body;
      if (!req.body.password)
        return res.status(400).json({ passwordRequired: true, message: "Besoin d'un mot de passe." });
      let hashedPassword = await import_bcrypt4.default.hash(req.body.password, 10);
      User.update({
        phone,
        password: hashedPassword,
        email,
        isActif
      }, {
        where: { id }
      }).then(() => {
        return User.findByPk(id).then((user) => {
          if (user === null) {
            const message2 = "L'utilisateur n'existe pas.";
            return res.status(404).json({ message: message2 });
          }
          const message = `Utilisateur mis \xE0 jour`;
          res.json({ message, data: user });
        });
      }).catch((error) => {
        if (error instanceof import_sequelize6.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec lors de la mise \xE0 jour de l'utilisateur.`;
        res.status(500).json({ message, data: error });
      });
    });
    usersController.post("/messages", async (req, res) => {
      Message.create(req.body).then((message) => {
        const messa = `message cr\xE9\xE9 avec succes.`;
        res.json({ messa, data: message });
      }).catch((error) => {
        if (error instanceof import_sequelize6.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec de la cr\xE9ation du message.`;
        res.status(500).json({ message, data: error });
      });
    });
    usersController.get("/:from/messages/:to", async (req, res) => {
      Message.findAll({
        where: {
          [import_sequelize6.Op.or]: [
            {
              to: req.params.to,
              from: req.params.from
            },
            {
              to: req.params.from,
              from: req.params.to
            }
          ]
        }
      }).then((roles2) => {
        res.status(200).json(roles2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    usersController.use("/admin", adminController);
  }
});

// controllers/tokenController.ts
var import_express6, tokenController;
var init_tokenController = __esm({
  "controllers/tokenController.ts"() {
    "use strict";
    import_express6 = require("express");
    init_connect();
    tokenController = (0, import_express6.Router)();
    tokenController.get("/", async (req, res) => {
      Token.findAll().then((tokens2) => {
        res.status(200).json(tokens2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    tokenController.get("/:id", async (req, res) => {
      Token.findByPk(req.params.id).then((token) => {
        if (token === null) {
          const message2 = "token n'existe pas.";
          return res.status(404).json({ message: message2 });
        }
        const message = "Token trouv\xE9.";
        res.json({ message, data: token });
      }).catch((error) => {
        const message = "token non trouv\xE9.";
        res.status(500).json({ message, data: error });
      });
    });
    tokenController.delete("/:id", async (req, res) => {
      Token.findByPk(req.params.id).then((token) => {
        if (token === null) {
          const message = "token n'existe pas.";
          return res.status(404).json({ message });
        }
        const tokenDeleted = token;
        return Token.destroy({
          where: { id: token.id }
        }).then(() => {
          const message = `Token supprim\xE9 avec succes.`;
          res.json({ message, data: tokenDeleted });
        });
      }).catch((error) => {
        const message = `Echec lors de la suppression du token.`;
        res.status(500).json({ message, data: error });
      });
    });
  }
});

// controllers/roleController.ts
var import_express7, import_sequelize7, roleController;
var init_roleController = __esm({
  "controllers/roleController.ts"() {
    "use strict";
    import_express7 = require("express");
    init_connect();
    import_sequelize7 = require("sequelize");
    roleController = (0, import_express7.Router)();
    roleController.get("/", async (req, res) => {
      Role.findAll().then((roles2) => {
        res.status(200).json(roles2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    roleController.post("/", async (req, res) => {
      Role.create(req.body).then((role) => {
        const message = `role cr\xE9e avec succes`;
        res.json({ message, data: role });
      }).catch((error) => {
        if (error instanceof import_sequelize7.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec de l'insertion du nouveau role.`;
        res.status(500).json({ message, data: error });
      });
    });
    roleController.delete("/:id", async (req, res) => {
      return Role.destroy({
        where: { id: req.params.id }
      }).then((role) => {
        const message = `Le role avec l'identifiant n\xB0${req.params.id} a bien \xE9t\xE9 supprim\xE9.`;
        res.json({ message, data: role });
      });
    });
    roleController.get("/:id", async (req, res) => {
      Role.findByPk(req.params.id).then((role) => {
        res.status(200).json(role);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    roleController.put("/:id", async (req, res) => {
      return Role.update(req.body, {
        where: { id: req.params.id }
      }).then(() => {
        const message = `role mis \xE0 jour`;
        res.json({ message });
      }).catch((error) => {
        if (error instanceof import_sequelize7.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Pas r\xE9ussi \xE0 mettre \xE0 jour le role.`;
        res.status(500).json({ message, data: error });
      });
    });
  }
});

// controllers/periodController.ts
var import_express8, import_sequelize8, periodController;
var init_periodController = __esm({
  "controllers/periodController.ts"() {
    "use strict";
    import_express8 = require("express");
    init_connect();
    import_sequelize8 = require("sequelize");
    periodController = (0, import_express8.Router)();
    periodController.post("/", async (req, res) => {
      Period.create(req.body).then((period) => {
        const message = `P\xE9riode cr\xE9\xE9 avec succes.`;
        res.json({ message, data: period });
      }).catch((error) => {
        if (error instanceof import_sequelize8.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec lors de la cr\xE9ation de la p\xE9riode.`;
        res.status(500).json({ message, data: error });
      });
    });
    periodController.delete("/:id", async (req, res) => {
      return Period.destroy({
        where: { id: req.params.id }
      }).then((period) => {
        const message = `La periode avec l'identifiant n\xB0${req.params.id} a bien \xE9t\xE9 supprim\xE9.`;
        res.json({ message, data: period });
      });
    });
    periodController.get("/", async (req, res) => {
      Period.findAll().then((periods2) => {
        res.status(200).json(periods2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    periodController.get("/:id", async (req, res) => {
      Period.findByPk(req.params.id).then((period) => {
        res.status(200).json(period);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    periodController.put("/:id", async (req, res) => {
      return Period.update(req.body, {
        where: { id: req.params.id }
      }).then(() => {
        const message = `P\xE9riode mise \xE0 jour avec succes`;
        res.json({ message });
      }).catch((error) => {
        if (error instanceof import_sequelize8.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec lors de la mise \xE0 jour de la periode.`;
        res.status(500).json({ message, data: error });
      });
    });
  }
});

// controllers/localisationController.ts
var import_express9, import_sequelize9, localisationController;
var init_localisationController = __esm({
  "controllers/localisationController.ts"() {
    "use strict";
    import_express9 = require("express");
    init_connect();
    import_sequelize9 = require("sequelize");
    localisationController = (0, import_express9.Router)();
    localisationController.post("/", async (req, res) => {
      Localisation.create(req.body).then((localisation) => {
        const message = `Localisation cr\xE9\xE9 avec succes.`;
        res.json({ message, data: localisation });
      }).catch((error) => {
        if (error instanceof import_sequelize9.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec lors de la cr\xE9ation d'une localisation.`;
        res.status(500).json({ message, data: error });
      });
    });
    localisationController.delete("/:id", async (req, res) => {
      return Localisation.destroy({
        where: { id: req.params.id }
      }).then((localisation) => {
        const message = `La localisation avec l'identifiant n\xB0${req.params.id} a bien \xE9t\xE9 supprim\xE9.`;
        res.json({ message, data: localisation });
      });
    });
    localisationController.get("/", async (req, res) => {
      Localisation.findAll().then((localisations2) => {
        res.status(200).json(localisations2);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    localisationController.get("/:id", async (req, res) => {
      Localisation.findByPk(req.params.id).then((localisation) => {
        res.status(200).json(localisation);
      }).catch((error) => {
        res.status(500).json(error);
      });
    });
    localisationController.put("/:id", async (req, res) => {
      return Localisation.update(req.body, {
        where: { id: req.params.id }
      }).then(() => {
        const message = `Localisation mise \xE0 jour avec succes`;
        res.json({ message });
      }).catch((error) => {
        if (error instanceof import_sequelize9.ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Echec lors de la mise \xE0 jour de la localisation.`;
        res.status(500).json({ message, data: error });
      });
    });
  }
});

// controllers/authController.ts
var import_express10, import_bcrypt5, jwt, authController;
var init_authController = __esm({
  "controllers/authController.ts"() {
    "use strict";
    import_express10 = require("express");
    init_connect();
    import_bcrypt5 = __toESM(require("bcrypt"));
    jwt = require("jsonwebtoken");
    authController = (0, import_express10.Router)();
    authController.post("/login", async (req, res) => {
      User.findAll().then(async (users2) => {
        const user = users2.find((user2) => user2.email == req.body.email);
        let message = "";
        if (user == null) {
          message = "Utilisateur non trouv\xE9.";
          return res.status(400).json({ userFound: false, message });
        }
        if (await import_bcrypt5.default.compare(req.body.password, user.password)) {
          message = "Good";
          const accessToken = jwt.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
          const refreshToken = jwt.sign({ name: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1Y" });
          Token.findAll().then((tokens2) => {
            const token = tokens2.find((token2) => token2.UserId == user.id);
            if (token == null) {
              Token.create({
                refreshToken,
                tokenPush: refreshToken,
                UserId: user.id
              });
            } else {
              Token.update({
                refreshToken
              }, { where: { UserId: user.id } });
            }
          });
          return res.status(200).json({ successfullLogin: true, userId: user.id, accessToken, refreshToken });
        } else {
          message = "Erreur du mot de passe.";
          return res.status(401).json({ successfullLogin: false, message });
        }
      }).catch((error) => {
        const message = `Pas acces a la liste des utilisateurs.`;
        res.status(500).json({ message, data: error });
      });
    });
    authController.post("/token", async (req, res) => {
      const refreshToken = req.body.token;
      if (refreshToken == null)
        return res.sendStatus(401);
      Token.findAll().then((tokens2) => {
        let refreshTokens = [];
        tokens2.map((token) => {
          refreshTokens.push(token.refreshToken);
        });
        if (!refreshTokens.includes(refreshToken))
          return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
          if (err)
            return res.sendStatus(403);
          const accessToken = jwt.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
          res.json({ accessToken });
        });
      });
    });
    authController.post("/loginAdmin", async (req, res) => {
      User.findAll({ include: [
        {
          model: Role,
          required: false
        }
      ] }).then(async (users2) => {
        const admin = users2.find((user) => user.Roles[0].role == "ADMIN" && user.email == req.body.email);
        let message = "";
        if (admin == null) {
          message = "Echec utilisateur non admin.";
          return res.status(400).json({ userFound: false, message });
        }
        if (await import_bcrypt5.default.compare(req.body.password, admin.password)) {
          message = "Good";
          const accessToken = jwt.sign({ name: admin.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
          const refreshToken = jwt.sign({ name: admin.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1Y" });
          Token.findAll().then((tokens2) => {
            const token = tokens2.find((token2) => token2.UserId == admin.id);
            if (token == null) {
              Token.create({
                refreshToken,
                tokenPush: refreshToken,
                UserId: admin.id
              });
            } else {
              Token.update({
                refreshToken
              }, { where: { UserId: admin.id } });
            }
          });
          return res.status(200).json({ successfullLogin: true, userId: admin.id, accessToken, refreshToken });
        } else {
          message = "Echec Mot de passe incorrect";
          return res.status(401).json({ successfullLogin: false, message });
        }
      }).catch((error) => {
        const message = `Echec: liste d'utilisateur non disponible.`;
        res.status(500).json({ message, data: error });
      });
    });
  }
});

// controllers/apiController.ts
var import_express11, swaggerJsDoc, swaggerUi, apiController, port, swaggerOptions, swaggerDocs;
var init_apiController = __esm({
  "controllers/apiController.ts"() {
    "use strict";
    import_express11 = require("express");
    init_employerController();
    init_degreeController();
    init_candidateController();
    init_userController();
    init_tokenController();
    init_roleController();
    init_periodController();
    init_localisationController();
    init_authController();
    swaggerJsDoc = require("swagger-jsdoc");
    swaggerUi = require("swagger-ui-express");
    apiController = (0, import_express11.Router)();
    port = process.env.PORT || 5e3;
    swaggerOptions = {
      swaggerDefinition: {
        info: {
          title: "The Choice Is Yours API",
          description: "Red or Blue",
          contact: {
            name: "Best front-end dev EUW"
          },
          servers: [{
            url: `http://localhost:${port}`,
            description: "localhost"
          }]
        }
      },
      apis: [`./controllers/*.ts`]
    };
    swaggerDocs = swaggerJsDoc(swaggerOptions);
    apiController.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    apiController.use("/users", usersController);
    apiController.use("/tokens", tokenController);
    apiController.use("/roles", roleController);
    apiController.use("/periods", periodController);
    apiController.use("/localisations", localisationController);
    apiController.use("/employers", employerController);
    apiController.use("/degrees", degreeController);
    apiController.use("/candidates", candidateController);
    apiController.use("/auth", authController);
  }
});

// socket.ts
var socket_exports = {};
__export(socket_exports, {
  io: () => io
});
var import_socket, import_http, httpServer, io;
var init_socket = __esm({
  "socket.ts"() {
    "use strict";
    import_socket = require("socket.io");
    import_http = require("http");
    init_server();
    httpServer = (0, import_http.createServer)(server_default);
    httpServer.listen(5001);
    io = new import_socket.Server(httpServer, {
      cors: {
        origin: `${process.env.urlFront}`
      }
    });
    io.on("connection", (socket) => {
      socket.on("send message", (data) => {
        socket.emit("private message", data.from, data.to);
      });
    });
  }
});

// server.ts
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  let message = "No token given";
  if (token == null)
    return res.status(401).send({ message });
  jwt2.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    message = "Expired token.";
    if (err)
      return res.status(403).send({ tokenIsExpired: true, message, data: err });
    req.user = user;
    next();
  });
}
var express, cors, app, port2, User2, jwt2, server_default;
var init_server = __esm({
  "server.ts"() {
    init_apiController();
    init_connect();
    require("dotenv").config();
    express = require("express");
    cors = require("cors");
    init_socket();
    app = express();
    app.disable("x-powered-by");
    initDb();
    app.use(cors());
    app.use(express.json());
    port2 = process.env.PORT || 5e3;
    app.listen(port2, () => {
      console.log(`Listening on port ${port2}...`);
    });
    app.get("/", (req, res) => {
      res.send("SWAGGER : /api/docs");
    });
    app.use("/api", apiController);
    ({ User: User2 } = (init_connect(), __toCommonJS(connect_exports)));
    jwt2 = require("jsonwebtoken");
    app.get("/api/users/test/:id", authenticateToken, (req, res) => {
      User2.findByPk(req.params.id).then((user) => {
        if (user === null) {
          const message2 = "Requested user does not exist.";
          return res.status(404).json({ message: message2 });
        }
        const message = "User found.";
        res.json({ message, data: user });
      }).catch((error) => {
        const message = "Cannot find user.";
        res.status(500).json({ message, data: error });
      });
    });
    app.use(({ res: ApiException }) => {
      const message = "Ressource not found.";
      return ApiException.status(404).json({ message });
    });
    server_default = app;
  }
});
init_server();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
