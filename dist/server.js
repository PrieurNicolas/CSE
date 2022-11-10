"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// database/mock-user.ts
var require_mock_user = __commonJS({
  "database/mock-user.ts"(exports, module2) {
    "use strict";
    var users = [
      {
        email: "pierru@gmail.com",
        phone: 800000001,
        isActif: true,
        password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
        LocalisationId: 1
      },
      {
        email: "test@gmail.com",
        phone: 111111111,
        isActif: true,
        password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
        LocalisationId: 2
      },
      {
        email: "simplon@gmail.com",
        phone: 111111111,
        isActif: true,
        password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
        LocalisationId: 3
      }
    ];
    module2.exports = users;
  }
});

// database/mock-token.ts
var require_mock_token = __commonJS({
  "database/mock-token.ts"(exports, module2) {
    "use strict";
    var tokens = [
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
    module2.exports = tokens;
  }
});

// database/mock-localisation.ts
var require_mock_localisation = __commonJS({
  "database/mock-localisation.ts"(exports, module2) {
    "use strict";
    var localisations = [
      {
        address: "19 impasse de la cuesta",
        zipCode: 62176,
        city: "Camiers"
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
    module2.exports = localisations;
  }
});

// database/mock-candidate.ts
var require_mock_candidate = __commonJS({
  "database/mock-candidate.ts"(exports, module2) {
    "use strict";
    var candidates = [
      {
        userId: 1,
        firstname: "gaetan",
        lastname: "pierru",
        birthday: "2000-01-20"
      },
      {
        userId: 2,
        firstname: "nicolas",
        lastname: "prieur",
        birthday: "2001-05-15"
      }
    ];
    module2.exports = candidates;
  }
});

// database/mock-employer.ts
var require_mock_employer = __commonJS({
  "database/mock-employer.ts"(exports, module2) {
    "use strict";
    var employers = [
      {
        siret: 79279132900016,
        structurename: "simplon"
      }
    ];
    module2.exports = employers;
  }
});

// database/mock-degree.ts
var require_mock_degree = __commonJS({
  "database/mock-degree.ts"(exports, module2) {
    "use strict";
    var degree = [
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
    module2.exports = degree;
  }
});

// database/mock-role.ts
var require_mock_role = __commonJS({
  "database/mock-role.ts"(exports, module2) {
    "use strict";
    var roles = [
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
    module2.exports = roles;
  }
});

// database/mock-period.ts
var require_mock_period = __commonJS({
  "database/mock-period.ts"(exports, module2) {
    "use strict";
    var periods = [
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
    module2.exports = periods;
  }
});

// database/mock-message.ts
var require_mock_message = __commonJS({
  "database/mock-message.ts"(exports, module2) {
    "use strict";
    var messages = [
      {
        message: "salut :)",
        to: 1,
        from: 3
      },
      {
        message: "salut comment ca  va :)",
        to: 3,
        from: 1
      },
      {
        message: "bien",
        to: 1,
        from: 3
      }
    ];
    module2.exports = messages;
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
          allowNull: false
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
    var import_sequelize = require("sequelize");
    module2.exports = (sequelize2, dataTypes) => {
      const concatRequiredMessage = (data) => {
        return `${data} is required`;
      };
      return sequelize2.define("Message", {
        id: {
          type: import_sequelize.DataTypes.BIGINT,
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
var require_connect = __commonJS({
  "database/connect.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var users = require_mock_user();
    var tokens = require_mock_token();
    var localisations = require_mock_localisation();
    var candidates = require_mock_candidate();
    var employers = require_mock_employer();
    var degrees = require_mock_degree();
    var roles = require_mock_role();
    var periods = require_mock_period();
    var messages = require_mock_message();
    var { Sequelize } = require("sequelize");
    var UserModel = require_users();
    var TokenModel = require_tokens();
    var LocalisationModel = require_localisations();
    var CandidateModel = require_candidates();
    var EmployerModel = require_employers();
    var DegreeModel = require_degrees();
    var RoleModel = require_roles();
    var PeriodModel = require_periods();
    var PeriodUserModel = require_periodUsers();
    var DegreeUserModel = require_degreeUsers();
    var RoleUserModel = require_roleUsers();
    var MessageModel = require_messages();
    var sequelize2 = new Sequelize(
      process.env.NAME_DATABASE,
      process.env.HOST_DATABASE,
      process.env.PASS_DATABASE,
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
    sequelize2.authenticate().then(() => console.log("Link established")).catch(
      (error) => console.error(`Error: ${error}`)
    );
    var User2 = UserModel(sequelize2, import_sequelize.DataTypes);
    var Token = TokenModel(sequelize2, import_sequelize.DataTypes);
    var Localisation = LocalisationModel(sequelize2, import_sequelize.DataTypes);
    var Candidate = CandidateModel(sequelize2, import_sequelize.DataTypes);
    var Employer = EmployerModel(sequelize2, import_sequelize.DataTypes);
    var Degree = DegreeModel(sequelize2, import_sequelize.DataTypes);
    var Role = RoleModel(sequelize2, import_sequelize.DataTypes);
    var Period = PeriodModel(sequelize2, import_sequelize.DataTypes);
    var PeriodUser = PeriodUserModel(sequelize2, import_sequelize.DataTypes);
    var DegreeUser = DegreeUserModel(sequelize2, import_sequelize.DataTypes);
    var RoleUser = RoleUserModel(sequelize2, import_sequelize.DataTypes);
    var Message = MessageModel(sequelize2, import_sequelize.DataTypes);
    User2.hasOne(Token, { onDelete: "cascade", hooks: true });
    Token.belongsTo(User2, { onDelete: "cascade", hooks: true });
    Localisation.hasOne(User2, { onDelete: "cascade", hooks: true });
    User2.belongsTo(Localisation, { onDelete: "cascade", hooks: true });
    User2.hasOne(Candidate, { foreignKey: "UserId", onDelete: "cascade", hooks: true });
    Candidate.belongsTo(User2, { foreignKey: "UserId", onDelete: "cascade", hooks: true });
    User2.hasOne(Employer, { onDelete: "cascade", hooks: true });
    Employer.belongsTo(User2, { onDelete: "cascade", hooks: true });
    Degree.belongsToMany(User2, { through: DegreeUser });
    User2.belongsToMany(Degree, { through: DegreeUser });
    Role.belongsToMany(User2, { through: RoleUser });
    User2.belongsToMany(Role, { through: RoleUser });
    Period.belongsToMany(User2, { through: PeriodUser });
    User2.belongsToMany(Period, { through: PeriodUser });
    User2.belongsToMany(User2, { through: { model: Message, unique: false }, as: "to", foreignKey: "to" });
    User2.belongsToMany(User2, { through: { model: Message, unique: false }, as: "from", foreignKey: "from" });
    var initDb = () => {
      return sequelize2.sync({ force: true }).then(() => {
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
          User2.create({
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
    module2.exports = {
      initDb,
      User: User2,
      Token,
      Role,
      Candidate,
      Employer,
      Degree,
      Localisation,
      Period,
      DegreeUser,
      PeriodUser,
      RoleUser,
      Message
    };
  }
});

// routes/tokens/findAllTokens.ts
var require_findAllTokens = __commonJS({
  "routes/tokens/findAllTokens.ts"(exports, module2) {
    "use strict";
    var { Token } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/tokens", (req, res) => {
        Token.findAll().then((tokens) => {
          res.status(200).json(tokens);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/tokens/findTokenByPk.ts
var require_findTokenByPk = __commonJS({
  "routes/tokens/findTokenByPk.ts"(exports, module2) {
    "use strict";
    var { Token } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/tokens/:id", (req, res) => {
        Token.findByPk(req.params.id).then((token) => {
          if (token === null) {
            const message2 = "Requested token does not exist.";
            return res.status(404).json({ message: message2 });
          }
          const message = "Token found.";
          res.json({ message, data: token });
        }).catch((error) => {
          const message = "Cannot find token.";
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/tokens/deleteToken.ts
var require_deleteToken = __commonJS({
  "routes/tokens/deleteToken.ts"(exports, module2) {
    "use strict";
    var { Token } = require_connect();
    module2.exports = (app2) => {
      app2.delete("/api/tokens/:id", (req, res) => {
        Token.findByPk(req.params.id).then((token) => {
          if (token === null) {
            const message = "Requested token does not exist.";
            return res.status(404).json({ message });
          }
          const tokenDeleted = token;
          return Token.destroy({
            where: { id: token.id }
          }).then(() => {
            const message = `Token successfully deleted.`;
            res.json({ message, data: tokenDeleted });
          });
        }).catch((error) => {
          const message = `Could not delete token.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/users/findAllUsers.ts
var require_findAllUsers = __commonJS({
  "routes/users/findAllUsers.ts"(exports, module2) {
    "use strict";
    var { User: User2, Role, Localisation, Degree } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/users", (req, res) => {
        User2.findAll({ include: [
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
        ] }).then((users) => {
          res.status(200).json(users);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/users/findAllUsersAdmin.ts
var require_findAllUsersAdmin = __commonJS({
  "routes/users/findAllUsersAdmin.ts"(exports, module2) {
    "use strict";
    var { User: User2, Role, Localisation, Degree } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/usersAdmin", (req, res) => {
        User2.findAll({
          include: [
            {
              model: Role,
              required: false
            }
          ],
          attributes: { exclude: ["password"] }
        }).then((users) => {
          let admins = users.filter((user) => {
            var _a;
            return ((_a = user.Roles[0]) == null ? void 0 : _a.id) == 1;
          });
          console.log(admins);
          res.status(200).json(admins);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/users/findUserByPk.ts
var require_findUserByPk = __commonJS({
  "routes/users/findUserByPk.ts"(exports, module2) {
    "use strict";
    var { User: User2 } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/users/:id", (req, res) => {
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
    };
  }
});

// routes/users/createUserAdmin.ts
var require_createUserAdmin = __commonJS({
  "routes/users/createUserAdmin.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var bcrypt = require("bcrypt");
    var jwt2 = require("jsonwebtoken");
    var { User: User2, Role, RoleUser } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/usersAdmin", async (req, res) => {
        if (!req.body.password)
          return res.status(400).json({ passwordRequired: true, message: "Password is required." });
        req.body.password = await bcrypt.hash(req.body.password, 10);
        User2.create({ ...req.body }).then(async (user) => {
          const roleRow = await Role.findByPk(1);
          user.addRole(roleRow, { through: RoleUser });
          const message = `User successfully created.`;
          res.json({ message, data: user });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not create new user.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/users/updateUser.ts
var require_updateUser = __commonJS({
  "routes/users/updateUser.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var bcrypt = require("bcrypt");
    var { User: User2 } = require_connect();
    module2.exports = (app2) => {
      app2.put("/api/users/:id", async (req, res) => {
        const id = req.params.id;
        const { phone, email, isActif } = req.body;
        if (!req.body.password)
          return res.status(400).json({ passwordRequired: true, message: "Password is required." });
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        User2.update({
          phone,
          password: hashedPassword,
          email,
          isActif
        }, {
          where: { id }
        }).then(() => {
          return User2.findByPk(id).then((user) => {
            if (user === null) {
              const message2 = "Requested user does not exist.";
              return res.status(404).json({ message: message2 });
            }
            const message = `User successfully updated`;
            res.json({ message, data: user });
          });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not update the user.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/users/deleteUser.ts
var require_deleteUser = __commonJS({
  "routes/users/deleteUser.ts"(exports, module2) {
    "use strict";
    var { User: User2 } = require_connect();
    module2.exports = (app2) => {
      app2.delete("/api/users/:id", (req, res) => {
        User2.findByPk(req.params.id).then((user) => {
          if (user === null) {
            const message = "Requested user does not exist.";
            return res.status(404).json({ message });
          }
          const userDeleted = user;
          return User2.destroy({
            where: { id: user.id }
          }).then(() => {
            const message = `User ${userDeleted.id} successfully deleted.`;
            res.json({ message, data: userDeleted });
          });
        }).catch((error) => {
          const message = `Could not delete user.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/auth/login.ts
var require_login = __commonJS({
  "routes/auth/login.ts"(exports, module2) {
    "use strict";
    var bcrypt = require("bcrypt");
    var jwt2 = require("jsonwebtoken");
    var { User: User2, Token } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/auth/login", (req, res) => {
        User2.findAll().then(async (users) => {
          const user = users.find((user2) => user2.email == req.body.email);
          let message = "";
          if (user == null) {
            message = "No such username exists.";
            return res.status(400).json({ userFound: false, message });
          }
          if (await bcrypt.compare(req.body.password, user.password)) {
            message = "Good";
            const accessToken = jwt2.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
            const refreshToken = jwt2.sign({ name: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1Y" });
            Token.findAll().then((tokens) => {
              const token = tokens.find((token2) => token2.UserId == user.id);
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
            message = "Wrong password for this username.";
            return res.status(401).json({ successfullLogin: false, message });
          }
        }).catch((error) => {
          const message = `Could not get users list.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/auth/loginAdmin.ts
var require_loginAdmin = __commonJS({
  "routes/auth/loginAdmin.ts"(exports, module2) {
    "use strict";
    var bcrypt = require("bcrypt");
    var jwt2 = require("jsonwebtoken");
    var { User: User2, Token, Role } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/auth/loginAdmin", (req, res) => {
        User2.findAll({ include: [
          {
            model: Role,
            required: false
          }
        ] }).then(async (users) => {
          const admin = users.find((user) => user.Roles[0].role == "ADMIN" && user.email == req.body.email);
          let message = "";
          if (admin == null) {
            message = "No such username exists.";
            return res.status(400).json({ userFound: false, message });
          }
          if (await bcrypt.compare(req.body.password, admin.password)) {
            message = "Good";
            const accessToken = jwt2.sign({ name: admin.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
            const refreshToken = jwt2.sign({ name: admin.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1Y" });
            Token.findAll().then((tokens) => {
              const token = tokens.find((token2) => token2.UserId == admin.id);
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
            message = "Wrong password for this username.";
            return res.status(401).json({ successfullLogin: false, message });
          }
        }).catch((error) => {
          const message = `Could not get users list.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/auth/token.ts
var require_token = __commonJS({
  "routes/auth/token.ts"(exports, module2) {
    "use strict";
    var jwt2 = require("jsonwebtoken");
    var { Token } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/auth/token", (req, res) => {
        const refreshToken = req.body.token;
        if (refreshToken == null)
          return res.sendStatus(401);
        Token.findAll().then((tokens) => {
          let refreshTokens = [];
          tokens.map((token) => {
            refreshTokens.push(token.refreshToken);
          });
          console.log("All tokens", refreshTokens);
          if (!refreshTokens.includes(refreshToken))
            return res.sendStatus(403);
          jwt2.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err)
              return res.sendStatus(403);
            const accessToken = jwt2.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
            res.json({ accessToken });
          });
        });
      });
    };
  }
});

// routes/role/createRole.ts
var require_createRole = __commonJS({
  "routes/role/createRole.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Role } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/roles", (req, res) => {
        Role.create(req.body).then((role) => {
          const message = `role successfully created.`;
          res.json({ message, data: role });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not create new role.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/role/deleteRole.ts
var require_deleteRole = __commonJS({
  "routes/role/deleteRole.ts"(exports, module2) {
    "use strict";
    var { Role } = require_connect();
    module2.exports = (app2) => {
      app2.delete("/api/roles/:id", (req, res) => {
        return Role.destroy({
          where: { id: req.params.id }
        }).then((role) => {
          const message = `Le role avec l'identifiant n\xB0${req.params.id} a bien \xE9t\xE9 supprim\xE9.`;
          res.json({ message, data: role });
        });
      });
    };
  }
});

// routes/role/findAllRole.ts
var require_findAllRole = __commonJS({
  "routes/role/findAllRole.ts"(exports, module2) {
    "use strict";
    var { Role } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/roles", (req, res) => {
        Role.findAll().then((roles) => {
          res.status(200).json(roles);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/role/findRoleById.ts
var require_findRoleById = __commonJS({
  "routes/role/findRoleById.ts"(exports, module2) {
    "use strict";
    var { Role } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/roles/:id", (req, res) => {
        Role.findByPk(req.params.id).then((role) => {
          res.status(200).json(role);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/role/updateRole.ts
var require_updateRole = __commonJS({
  "routes/role/updateRole.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Role } = require_connect();
    module2.exports = (app2) => {
      app2.put("/api/roles/:id", (req, res) => {
        return Role.update(req.body, {
          where: { id: req.params.id }
        }).then(() => {
          const message = `role successfully updated`;
          res.json({ message });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not update the role.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/period/createPeriod.ts
var require_createPeriod = __commonJS({
  "routes/period/createPeriod.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Period } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/periods", (req, res) => {
        Period.create(req.body).then((period) => {
          const message = `period successfully created.`;
          res.json({ message, data: period });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not create new period.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/period/deletePeriod.ts
var require_deletePeriod = __commonJS({
  "routes/period/deletePeriod.ts"(exports, module2) {
    "use strict";
    var { Period } = require_connect();
    module2.exports = (app2) => {
      app2.delete("/api/periods/:id", (req, res) => {
        return Period.destroy({
          where: { id: req.params.id }
        }).then((period) => {
          const message = `La periode avec l'identifiant n\xB0${req.params.id} a bien \xE9t\xE9 supprim\xE9.`;
          res.json({ message, data: period });
        });
      });
    };
  }
});

// routes/period/findAllPeriod.ts
var require_findAllPeriod = __commonJS({
  "routes/period/findAllPeriod.ts"(exports, module2) {
    "use strict";
    var { Period } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/periods", (req, res) => {
        Period.findAll().then((periods) => {
          res.status(200).json(periods);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/period/findPeriodById.ts
var require_findPeriodById = __commonJS({
  "routes/period/findPeriodById.ts"(exports, module2) {
    "use strict";
    var { Period } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/periods/:id", (req, res) => {
        Period.findByPk(req.params.id).then((period) => {
          res.status(200).json(period);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/period/updatePeriod.ts
var require_updatePeriod = __commonJS({
  "routes/period/updatePeriod.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Period } = require_connect();
    module2.exports = (app2) => {
      app2.put("/api/periods/:id", (req, res) => {
        return Period.update(req.body, {
          where: { id: req.params.id }
        }).then(() => {
          const message = `period successfully updated`;
          res.json({ message });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not update the period.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/localisation/createLocalisation.ts
var require_createLocalisation = __commonJS({
  "routes/localisation/createLocalisation.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/localisations", (req, res) => {
        Localisation.create(req.body).then((localisation) => {
          const message = `localisation successfully created.`;
          res.json({ message, data: localisation });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not create new localisation.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/localisation/deleteLocalisation.ts
var require_deleteLocalisation = __commonJS({
  "routes/localisation/deleteLocalisation.ts"(exports, module2) {
    "use strict";
    var { Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.delete("/api/localisations/:id", (req, res) => {
        return Localisation.destroy({
          where: { id: req.params.id }
        }).then((localisation) => {
          const message = `La localisation avec l'identifiant n\xB0${req.params.id} a bien \xE9t\xE9 supprim\xE9.`;
          res.json({ message, data: localisation });
        });
      });
    };
  }
});

// routes/localisation/findAllLocalisation.ts
var require_findAllLocalisation = __commonJS({
  "routes/localisation/findAllLocalisation.ts"(exports, module2) {
    "use strict";
    var { Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/localisations", (req, res) => {
        Localisation.findAll().then((localisations) => {
          res.status(200).json(localisations);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/localisation/findLocalisationById.ts
var require_findLocalisationById = __commonJS({
  "routes/localisation/findLocalisationById.ts"(exports, module2) {
    "use strict";
    var { Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/localisations/:id", (req, res) => {
        Localisation.findByPk(req.params.id).then((localisation) => {
          res.status(200).json(localisation);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/localisation/updateLocalisation.ts
var require_updateLocalisation = __commonJS({
  "routes/localisation/updateLocalisation.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.put("/api/localisations/:id", (req, res) => {
        return Localisation.update(req.body, {
          where: { id: req.params.id }
        }).then(() => {
          const message = `localisation successfully updated`;
          res.json({ message });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not update the localisation.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/employer/createEmployer.ts
var require_createEmployer = __commonJS({
  "routes/employer/createEmployer.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var bcrypt = require("bcrypt");
    var { User: User2, Employer, Localisation, PeriodUser, Period, Role, RoleUser } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/employers", async (req, res) => {
        req.body.users.password = await bcrypt.hash(req.body.users.password, 10);
        User2.create(req.body.users).then(async (user) => {
          var _a;
          Employer.create(req.body.employer).then((e) => {
            e.setUser(user);
          });
          Localisation.create(req.body.localisation).then((local) => {
            user.setLocalisation(local);
          });
          (_a = req.body.periods) == null ? void 0 : _a.map(async (period) => {
            const periodRow = await Period.findByPk(period.id);
            user.addPeriod(periodRow, { through: PeriodUser });
          });
          const roleRow = await Role.findByPk(3);
          user.addRole(roleRow, { through: RoleUser });
        }).then((employer) => {
          const message = `employeur successfully created.`;
          res.json({ message, data: employer });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not create new employeur.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/employer/deleteEmployer.ts
var require_deleteEmployer = __commonJS({
  "routes/employer/deleteEmployer.ts"(exports, module2) {
    "use strict";
    var { User: User2, Employer, Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.delete("/api/employers/:id", (req, res) => {
        Employer.findByPk(req.params.id).then(async (employer) => {
          if (employer === null) {
            const message = "L'employeur demand\xE9 n'existe pas. R\xE9essayer avec un autre identifiant.";
            return res.status(404).json({ message });
          }
          const employerDeleted = employer;
          let local = await User2.findByPk(employerDeleted.UserId);
          return User2.destroy({
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
    };
  }
});

// routes/employer/findAllEmployer.ts
var require_findAllEmployer = __commonJS({
  "routes/employer/findAllEmployer.ts"(exports, module2) {
    "use strict";
    var { User: User2, Employer, Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/employers", (req, res) => {
        Employer.findAll({
          include: [
            {
              model: User2,
              required: false,
              include: {
                model: Localisation,
                require: false
              }
            }
          ]
        }).then((employers) => {
          res.status(200).json(employers);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/employer/findEmployerById.ts
var require_findEmployerById = __commonJS({
  "routes/employer/findEmployerById.ts"(exports, module2) {
    "use strict";
    var { User: User2, Employer, Localisation, Period, Role } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/employers/:id", (req, res) => {
        Employer.findByPk(req.params.id, {
          include: [
            {
              model: User2,
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
        }).then((employers) => {
          res.status(200).json(employers);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/employer/updateEmployer.ts
var require_updateEmployer = __commonJS({
  "routes/employer/updateEmployer.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Employer } = require_connect();
    module2.exports = (app2) => {
      app2.put("/api/employers/:id", (req, res) => {
        Employer.update(req.body, {
          where: { id: req.params.id }
        }).then((employer) => {
          if (employer === null) {
            const message2 = "Requested employer does not exist.";
            return res.status(404).json({ message: message2 });
          }
          const message = `Employer successfully updated`;
          res.json({ message, data: employer });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not update the employer.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/degree/createDegree.ts
var require_createDegree = __commonJS({
  "routes/degree/createDegree.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Degree } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/degrees", (req, res) => {
        Degree.create(req.body).then((degree) => {
          const message = `degree successfully created.`;
          res.json({ message, data: degree });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not create new degree.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/degree/deleteDegree.ts
var require_deleteDegree = __commonJS({
  "routes/degree/deleteDegree.ts"(exports, module2) {
    "use strict";
    var { Degree } = require_connect();
    module2.exports = (app2) => {
      app2.delete("/api/degrees/:id", (req, res) => {
        return Degree.destroy({
          where: { id: req.params.id }
        }).then((degree) => {
          const message = `Le diplome avec l'identifiant n\xB0${req.params.id} a bien \xE9t\xE9 supprim\xE9.`;
          res.json({ message, data: degree });
        });
      });
    };
  }
});

// routes/degree/findAllDegree.ts
var require_findAllDegree = __commonJS({
  "routes/degree/findAllDegree.ts"(exports, module2) {
    "use strict";
    var { Degree } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/degrees", (req, res) => {
        Degree.findAll().then((candidates) => {
          res.status(200).json(candidates);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/degree/findDegreeById.ts
var require_findDegreeById = __commonJS({
  "routes/degree/findDegreeById.ts"(exports, module2) {
    "use strict";
    var { Degree } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/degrees/:id", (req, res) => {
        Degree.findByPk(req.params.id).then((candidates) => {
          res.status(200).json(candidates);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/degree/updateDegree.ts
var require_updateDegree = __commonJS({
  "routes/degree/updateDegree.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Degree } = require_connect();
    module2.exports = (app2) => {
      app2.put("/api/degrees/:id", (req, res) => {
        Degree.update(req.body, {
          where: { id: req.params.id }
        }).then(() => {
          const message = `degree successfully updated`;
          res.json({ message });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not update the degree.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/candidate/createCandidate.ts
var require_createCandidate = __commonJS({
  "routes/candidate/createCandidate.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var bcrypt = require("bcrypt");
    var { User: User2, Candidate, Localisation, PeriodUser, Period, DegreeUser, Degree, Role, RoleUser } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/candidates", async (req, res) => {
        req.body.users.password = await bcrypt.hash(req.body.users.password, 10);
        User2.create(req.body.users).then(async (user) => {
          var _a, _b;
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
          (_b = req.body.degrees) == null ? void 0 : _b.map(async (degree) => {
            const degreeRow = await Degree.findByPk(degree.id);
            user.addDegree(degreeRow, { through: DegreeUser });
          });
          const roleRow = await Role.findByPk(2);
          user.addRole(roleRow, { through: RoleUser });
        }).then((candidates) => {
          const message = `candidate successfully created.`;
          res.json({ message, data: candidates });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not create new candidate.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/candidate/deleteCandidate.ts
var require_deleteCandidate = __commonJS({
  "routes/candidate/deleteCandidate.ts"(exports, module2) {
    "use strict";
    var { User: User2, Candidate, Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.delete("/api/candidates/:id", (req, res) => {
        Candidate.findByPk(req.params.id).then(async (candidat) => {
          if (candidat === null) {
            const message = "Le Candidat demand\xE9 n'existe pas. R\xE9essayer avec un autre identifiant.";
            return res.status(404).json({ message });
          }
          const candidatDeleted = candidat;
          let local = await User2.findByPk(candidatDeleted.UserId);
          return User2.destroy({
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
    };
  }
});

// routes/candidate/findAllCandidate.ts
var require_findAllCandidate = __commonJS({
  "routes/candidate/findAllCandidate.ts"(exports, module2) {
    "use strict";
    var { User: User2, Candidate, Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/candidates", (req, res) => {
        Candidate.findAll({
          include: [
            {
              model: User2,
              required: false,
              include: {
                model: Localisation,
                require: false
              }
            }
          ]
        }).then((candidates) => {
          res.status(200).json(candidates);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/candidate/findCandidateById.ts
var require_findCandidateById = __commonJS({
  "routes/candidate/findCandidateById.ts"(exports, module2) {
    "use strict";
    var { User: User2, Candidate, Localisation, Degree, Period, Role } = require_connect();
    module2.exports = (app2) => {
      app2.get("/api/candidates/:id", (req, res) => {
        Candidate.findByPk(req.params.id, {
          include: [
            {
              model: User2,
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
        }).then((candidates) => {
          res.status(200).json(candidates);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/candidate/updateCandidate.ts
var require_updateCandidate = __commonJS({
  "routes/candidate/updateCandidate.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Candidate } = require_connect();
    module2.exports = (app2) => {
      app2.put("/api/candidates/:id", (req, res) => {
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
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not update the candidate.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/form/formUpdateCandidate.ts
var require_formUpdateCandidate = __commonJS({
  "routes/form/formUpdateCandidate.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Candidate, User: User2, Degree, Period, PeriodUser, DegreeUser, Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.put("/api/form/candidat/:id", (req, res) => {
        Candidate.update(req.body.candidate, { where: { id: req.params.id } }).then(() => {
          Candidate.findByPk(req.params.id).then((candidat) => {
            User2.update(req.body.users, { where: { id: candidat.UserId } }).then(() => {
              User2.findByPk(candidat.UserId).then((user) => {
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
              model: User2,
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
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Le Candidat n'a pas pu \xEAtre ajout\xE9. R\xE9essayer dans quelques instants.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/form/formUpdateEmployer.ts
var require_formUpdateEmployer = __commonJS({
  "routes/form/formUpdateEmployer.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Employer, User: User2, Period, PeriodUser, Localisation } = require_connect();
    module2.exports = (app2) => {
      app2.put("/api/form/employers/:id", (req, res) => {
        console.log(req.body.employer);
        Employer.update(req.body.employer, { where: { id: req.params.id } }).then(() => {
          Employer.findByPk(req.params.id).then((employer) => {
            User2.update(req.body.users, { where: { id: employer.UserId } }).then(() => {
              User2.findByPk(employer.UserId).then((user) => {
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
              model: User2,
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
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `L'employeur n'a pas pu \xEAtre ajout\xE9. R\xE9essayer dans quelques instants.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// routes/message/findByDiscussion.ts
var require_findByDiscussion = __commonJS({
  "routes/message/findByDiscussion.ts"(exports, module2) {
    "use strict";
    var { Message } = require_connect();
    var { Op } = require("sequelize");
    module2.exports = (app2) => {
      app2.get("/api/messages/:currentUser/:otherUser", (req, res) => {
        Message.findAll({
          where: {
            [Op.or]: [
              {
                to: req.params.otherUser,
                from: req.params.currentUser
              },
              {
                to: req.params.currentUser,
                from: req.params.otherUser
              }
            ]
          }
        }).then((roles) => {
          res.status(200).json(roles);
        }).catch((error) => {
          res.status(500).json(error);
        });
      });
    };
  }
});

// routes/message/createMessage.ts
var require_createMessage = __commonJS({
  "routes/message/createMessage.ts"(exports, module2) {
    "use strict";
    var import_sequelize = require("sequelize");
    var { Message } = require_connect();
    module2.exports = (app2) => {
      app2.post("/api/messages", (req, res) => {
        Message.create(req.body).then((message) => {
          const messa = `message successfully created.`;
          res.json({ messa, data: message });
        }).catch((error) => {
          if (error instanceof import_sequelize.ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          const message = `Could not create new message.`;
          res.status(500).json({ message, data: error });
        });
      });
    };
  }
});

// server.ts
require("dotenv").config();
var cors = require("cors");
var express = require("express");
var app = express();
app.use(cors());
var swaggerJsDoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
var sequelize = require_connect();
app.use(express.json());
sequelize.initDb();
var port = process.env.PORT || 5e3;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
app.get("/", (req, res) => {
  res.send("SWAGGER : /api/docs");
});
var swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Centre Social Eclat\xE9",
      description: "Swagger",
      contact: {
        name: "front-end dev EUW"
      },
      servers: [{
        url: `http://localhost:${port}`,
        description: "localhost"
      }]
    }
  },
  apis: [`./routes/*/*.ts`]
};
var swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
require_findAllTokens()(app);
require_findTokenByPk()(app);
require_deleteToken()(app);
require_findAllUsers()(app);
require_findAllUsersAdmin()(app);
require_findUserByPk()(app);
require_createUserAdmin()(app);
require_updateUser()(app);
require_deleteUser()(app);
require_login()(app);
require_loginAdmin()(app);
require_token()(app);
require_createRole()(app);
require_deleteRole()(app);
require_findAllRole()(app);
require_findRoleById()(app);
require_updateRole()(app);
require_createPeriod()(app);
require_deletePeriod()(app);
require_findAllPeriod()(app);
require_findPeriodById()(app);
require_updatePeriod()(app);
require_createLocalisation()(app);
require_deleteLocalisation()(app);
require_findAllLocalisation()(app);
require_findLocalisationById()(app);
require_updateLocalisation()(app);
require_createEmployer()(app);
require_deleteEmployer()(app);
require_findAllEmployer()(app);
require_findEmployerById()(app);
require_updateEmployer()(app);
require_createDegree()(app);
require_deleteDegree()(app);
require_findAllDegree()(app);
require_findDegreeById()(app);
require_updateDegree()(app);
require_createCandidate()(app);
require_deleteCandidate()(app);
require_findAllCandidate()(app);
require_findCandidateById()(app);
require_updateCandidate()(app);
require_formUpdateCandidate()(app);
require_formUpdateEmployer()(app);
require_findByDiscussion()(app);
require_createMessage()(app);
var { User } = require_connect();
var jwt = require("jsonwebtoken");
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  let message = "No token given";
  if (token == null)
    return res.status(401).send({ message });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    message = "Expired token.";
    if (err)
      return res.status(403).send({ tokenIsExpired: true, message, data: err });
    req.user = user;
    next();
  });
}
app.get("/api/users/test/:id", authenticateToken, (req, res) => {
  User.findByPk(req.params.id).then((user) => {
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
