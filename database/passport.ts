import passport from 'passport'
import { Error } from 'sequelize';
const {User} =require("./connect")
var JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `${process.env.ACCESS_TOKEN_SECRET}`,
    algortihms: ['RS256']
};

passport.use(
    new JwtStrategy(opts, function (jwt_payload: any, done: any ) {
        console.log(jwt_payload);

        User.findOne({where: {id: jwt_payload.id}})
            .then((user: boolean) => {
                if(!user) {
                    return done(null,false);
                }
                done(null, user)    
            })
            .catch((err: Error) => done(null,err));
    })
    
    
)