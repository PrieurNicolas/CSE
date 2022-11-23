import { Router } from "express";
import { ValidationError } from "sequelize";
import { User, Candidate, Localisation, Period, PeriodUser, Degree, DegreeUser, Role, RoleUser } from "../database/connect";
import { ApiException } from "../types/exception";
import bcrypt from 'bcrypt';
import { candidateId, candidateTypes } from "../types/candidate";

const candidateController = Router();

/**
 * @swagger
 * tags:
 *      name: Candidate
 *      description: Manage candidate
 */

/**
  * @openapi
  * /api/candidates:
  *  post:
  *      tags: [Candidate]
  *      description: Create a candidate
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"candidate": {"firstname": "luc","lastname": "fate","birthday": "1999-01-01", "wantToBe": "animateur"},"users": {"password": "string", "passwordconf": "string","email": "lucfate@test.com","phone": "2345676","isActif": true},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}],"degrees": [{"id":1}]}
  *      responses:
  *        200:
  *          description: Create a new candidate.
  */
candidateController.post('/', async (req, res) => {
    if (!req.body.users.password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })
    if (req.body.users.password !== req.body.users.passwordconf) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe doit être identique.' })

    req.body.users.password = await bcrypt.hash(req.body.users.password, 10)
    if (!Number.isInteger(Number (req.body.users.phone) )){
        return res.status(400).json({message: "Le numero de telephone doit être un nombre", data: req.body.users.phone})
    }

    try {
        User.create(req.body.users).then(async (user: any) => {
            Candidate.create(req.body.candidate).then((c: any) => {
                c.setUser(user)
            })

            Localisation.create(req.body.localisation).then((local: any) => {
                user.setLocalisation(local)
            })

            req.body.periods?.map(async (period: any) => {
                const periodRow = await Period.findByPk(period.id)
                user.addPeriod(periodRow, { through: PeriodUser })
            })

            req.body.degrees ? req.body.degrees.map(async (degree: any) => {
                const degreeRow = await Degree.findByPk(degree.id)
                user.addDegree(degreeRow, { through: DegreeUser })
            }) : user.addDegree(await Degree.findByPk(5), { through: DegreeUser })


            const roleRow = await Role.findByPk(2)
            user.addRole(roleRow, { through: RoleUser })

        }).then((candidates: any) => {
            const message: string = `Candidat créé avec succes.`;
            res.json({ message, data: candidates });
        }).catch((error: ApiException) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `Echec lors de la création du candidat.`
            res.status(500).json({ message, data: error })
        })
    } catch (error) {
        return res.status(500).json(error)
    }
})

/**
  * @openapi
  * /api/candidates/{id}:
  *  delete:
  *      tags: [Candidate]
  *      description: Delete a candidate
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a candidate 
  */
candidateController.delete('/:id', async (req, res) => {
    Candidate.findByPk(req.params.id).then(async (candidat: candidateId) => {
        if (candidat === null) {
            const message = "Le Candidat demandé n'existe pas. Réessayer avec un autre identifiant."
            return res.status(404).json({ message })
        }

        const candidatDeleted = candidat;
        let local = await User.findByPk(candidatDeleted.UserId)

        return User.destroy({
            where: { id: candidat.UserId }
        }).then(() => {
            Localisation.destroy({
                where: { id: local.LocalisationId }
            })

            const message = `Le Candidat avec l'identifiant n°${candidatDeleted.id} a bien été supprimé.`
            res.json({ message, data: candidatDeleted })
        })
    })
        .catch((error: ApiException) => {
            const message = `Le Candidat n'a pas pu être supprimé. Réessayer dans quelques instants.`;
            res.status(500).json({ message, data: error });
        });
})

/**
 * @openapi
 * /api/candidates:
 *   get:
 *      tags: [Candidate]
 *      responses:
 *        200:
 *          description: Get the list of all candidate.
 */
candidateController.get('/', async (req, res) => {
    Candidate.findAll({
        include: [
            {
                model: User,
                required: false,
                attributes: {exclude: ['password']},
                include: {
                    model: Localisation,
                    require: false
                }
            }
        ]
    })
        .then((candidates: candidateTypes) => {
            res.status(200).json(candidates)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })

})

/**
 * @openapi
 * /api/candidates/{id}:
 *   get:
 *      tags: [Candidate]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique candidate.
 */
candidateController.get('/:id', async (req, res) => {
    Candidate.findByPk(req.params.id, {
        include: [
            {
                model: User,
                required: false,
                attributes: {exclude: ['password']},
                include: [
                    {
                        model: Localisation,
                        require: false
                    },
                    {
                        model: Degree,
                        require: false,
                    },
                    {
                        model: Period,
                        require: false,
                    },
                    {
                        model: Role,
                        require: false,
                    }
                ]
            }
        ]
    })
        .then((candidates: candidateTypes) => {
            res.status(200).json(candidates)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

/**
  * @openapi
  * /api/candidates/{id}:
  *  put:
  *      tags: [Candidate]
  *      description: Update a candidate
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {    "firstname": "a", "lastname": "a", "birthday": "1999-01-25"}
  *      responses:
  *        200:
  *          description: Update the candidate of given id.
  */
candidateController.put('/:id', async (req, res) => {
    Candidate.update(req.body, {
        where: { id: req.params.id }
    }).then((candidate: any) => {
        if (candidate === null) {
            const message = "Requested user does not exist."
            return res.status(404).json({ message })
        }
        const message = `Candidate successfully updated`;
        res.json({ message, data: candidate });
    }).catch((error: ApiException) => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Could not update the candidate.`;
        res.status(500).json({ message, data: error });
    });
})

/**
  * @openapi
  * /api/candidates/form/{id}:
  *  put:
  *      tags: [Candidate]
  *      description: Crée un candidat
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default : 1
  *       - name: JSON
  *         in: body
  *         required: true  
  *         type: object
  *         default: {"candidate": {"firstname": "luc","lastname": "fate","birthday": "1999-01-01"},"users": {"password": "string", "passwordconf": "string","email": "lucfate@test.com","phone": 456789,"isActif": true},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}],"degrees": [{"id":1}]}
  *      responses:
  *        200:
  *          description: La requête s'est bien déroulé
  */
candidateController.put('/form/:id', async (req, res) => {
    if (!req.body.users.password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })
    if (req.body.users.password !== req.body.users.passwordconf) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe doit être identique.' })

    req.body.users.password && (req.body.users.password = await bcrypt.hash(req.body.users.password, 10))

    if (!Number.isInteger(Number (req.body.users.phone) )){
        return res.status(400).json({message: "Le numero de telephone doit être un nombre", data: req.body.users.phone})
    }

    try {
        Candidate.update(req.body.candidate, { where: { id: req.params.id } }).then(() => {
            Candidate.findByPk(req.params.id).then((candidat: candidateTypes) => {
                User.update(req.body.users, { where: { id: candidat.UserId } }).then(() => {
                    User.findByPk(candidat.UserId).then((user: any) => {

                        PeriodUser.destroy({ where: { UserId: user.id } })
                        req.body.periods?.map(async (DispoMap: any) => {
                            const DisponibiliteRow = await Period.findByPk(DispoMap.id);
                            await user.addPeriod(DisponibiliteRow, { through: PeriodUser })
                        })

                        DegreeUser.destroy({ where: { UserId: user.id } })
                        req.body.degrees?.map(async (DiploMap: any) => {
                            const DiplomeRow = await Degree.findByPk(DiploMap.id);
                            await user.addDegree(DiplomeRow, { through: DegreeUser })
                        })

                        Localisation.update(req.body.localisation, {
                            where: { id: user.LocalisationId }
                        })
                    })
                })
            })
        })
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
        }).then((candidats: any) => {
            const message: string = 'Le candidat à bien été mis à jour'
            res.json({ message, data: candidats })
        })
            .catch((error: ApiException) => {
                if (error instanceof ValidationError) {
                    return res.status(400).json({ message: error.message, data: error })
                }
                const message = `Le Candidat n'a pas pu être ajouté. Réessayer dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    } catch (error) {
        return res.status(500).json(error)
    }
})

export { candidateController }