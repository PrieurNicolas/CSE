import { CandidateRepository } from "./repository/candidate.repository";
import { UserRepository } from "./repository/user.repository";
import { EmailService } from "./services/email.service";


const cron = require('node-cron');

//fonction pour calculer le temps en année entre deux date
function dateDiff(dateold: Date, datenew: Date) {
    const ynew = datenew.getFullYear();
    const mnew = datenew.getMonth();
    const dnew = datenew.getDate();
    const yold = dateold.getFullYear();
    const mold = dateold.getMonth();
    const dold = dateold.getDate();

    let age = ynew - yold;

    if (mold > mnew) {
        age--;
    } else if (mold === mnew) {
        if (dold > dnew) {
            age--;
        }
    }

    return age;
}

export default function dailyTask() {
    cron.schedule('0 0 23 * * *', async () => {
        let candidatRepository = new CandidateRepository()
        let userRepository = new UserRepository()
        //application non ouvert depuis un ans = inactif
        // TODO pour candidat uniquement


        const usersActif = (await candidatRepository.findAll()).filter(user => {
            if (!user.User.isActif) return false
            let annee = dateDiff(user.User.lastConnection, new Date())
            return annee
        })

        usersActif.forEach((user) => {
            user.User.isActif = false
            candidatRepository.update(user, user.id)
        })

    
        //inactif depuis plus de 3 ans = viré  
        const usersInactif = (await userRepository.findAll()).filter(user => {
            if (user.isActif) return false
            let annee = dateDiff(user.lastConnection, new Date())
            if (annee >= 3) return true
            return false
        })

        let emailService = new EmailService(null)
        usersInactif.forEach(async (user) => {
            try {
                const data = await emailService.sendMail(
                    user.email, 'end service',
                   'Hello, tu reçois ce mail pour te dire que nous supprimont toutes tes données, si tu veux revenir il faudra t\'inscrire '
                )
                if (data) {
                    console.log(data)
                }else {
                    console.log("pas reussi")
                }
            } catch (error) {
                console.log(error)
            }

            await userRepository.delete(user.id)
        })
    });

} 