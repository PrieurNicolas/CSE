import { Application } from "express";
import passport from "passport";
const {User} = require('../database/connect')


module.exports = (app : Application) => {
    app.get('/protected', 
    passport.authenticate('jwt',  {session : false}),
     function(req , res){
        return res.status(200).json({
            success : true,
            message : 'Test GOOD',
            
        })
    });
};