import { UserRepository } from "./repository/user.repository";


const cron = require('node-cron');
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
        let userRepository = new UserRepository()
        const usersActif = (await userRepository.findAll()).filter(user => {
            if (!user.isActif) return false
            let annee = dateDiff(user.lastConnection, new Date())
            return annee
        })
        usersActif.forEach((user) => {
            user.isActif = false
            userRepository.update(user, user.id)
        })

        const usersInactif = (await userRepository.findAll()).filter(user => {
            if (user.isActif) return false
            let annee = dateDiff(user.lastConnection, new Date())
            if (annee >= 2) return true
            return false
        })
        usersInactif.forEach((user) => {
            userRepository.delete(user.id)
        })
    });

} 