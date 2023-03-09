import { Request, Response } from "express";
import { IServiceToken } from "../services/core/service.interface";
import { AuthDTO } from "../DTO/auth.dto";
import { UserLoginDTO } from "../DTO/user.dto";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
export class AuthHandler {

    private authService: IServiceToken<AuthDTO, UserLoginDTO>;

    constructor(service: IServiceToken<AuthDTO, UserLoginDTO>) {
        this.authService = service;
    }

    token = async (req: Request, res: Response) => {
        try {
            const refreshToken = req.body.token
            if (refreshToken == null) return res.sendStatus(401)
            const token = await this.authService.findToken(refreshToken);

            if (token == null) return res.sendStatus(403)

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err: any) => {
                if (err) return res.sendStatus(403)
                const accessToken = jwt.sign({ id: token.UserId }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15s' })
                res.json({ accessToken: accessToken })
            })
        } catch (err) {

        }
    }

    login = async (req: Request, res: Response) => {

        try {
            const user = await this.authService.findUser(req.body.email);


            if (user == null) {
                return res.status(401).json({ userFound: false, message: "utilisateur non trouvé" })
            }

            if (await bcrypt.compare(req.body.password, user.password)) {
                const accessToken = jwt.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15s' })
                const refreshToken = jwt.sign({ name: user.id }, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '1Y' })


                const token = await this.authService.findUT(user.id);

                if (token == null) {
                    await this.authService.create({ refreshToken: refreshToken, UserId: user.id, tokenPush: refreshToken })
                } else {
                    await this; this.authService.update({ refreshToken: refreshToken }, user.id)
                }

                return res.status(200).json({ successfullLogin: 'bien connecte', accessToken: accessToken, refreshToken: refreshToken, user: user.id, role: user.role })
            } else {
                return res.status(401).json({ successfullLogin: false, message: 'non connecter' })
            }
        } catch (error) {
            return res.status(500).json(error)
        }

    }

    forgotpsw = async (req: Request, res: Response) => {
        const user = await this.authService.findUser(req.body.email)
        if (user) {
            const refresh_token = jwt.sign({ id: user.id, user_nom: user.email }, process.env.REFRESH_TOKEN_SECRET!, { algorithm: "HS256", expiresIn: '15min' });
            const link = `${process.env.urlFront!}/reset?token=${refresh_token}`

            const data = await this.authService.email({
                from: process.env.EMAIL!, to: user.email, subject: 'Forgot password', text: 'Forgot password',
                html: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    link + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            })

            console.log(data);
            

            if(data) {
                return res.status(200).json("email envoyé")
            }
            return res.status(500).json("email non envoyé")
        } else {
            return res.status(401).json("email incorrect")
        }
    }
}