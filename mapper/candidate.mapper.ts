import { CandidateDTO } from "../DTO/candidate.dto";
import { degreeId, degreeTypes } from "../types/degree";
import { periodId, periodTypes } from "../types/period";

export class CandidateMapper {
    static mapToDto(candidate: any): CandidateDTO | null {
        if (candidate === null) return null;        
        const dto: CandidateDTO = {
            firstname: candidate.firstname,
            lastname: candidate.lastname,
            birthday: candidate.birthday,
            wantToBe: candidate.wantToBe,
            permis: candidate.permis,
            User: {
                email: candidate.User.email,
                phone: candidate.User.phone,
                image: process.env.local +candidate.User.image,
                isActif: candidate.User.isActif,
                Localisation: {
                    id: candidate.User.Localisation.id,
                    address: candidate.User.Localisation.address,
                    zipCode: candidate.User.Localisation.zipCode,
                    city: candidate.User.Localisation.city,
                },
                Period: candidate.User.Periods.map((p: periodId) => ({ periodname: p.periodname, id: p.id })),
                Degree: candidate.User.Degrees.map((d: degreeId) => ({ degreename: d.degreename, id:d.id })),
            },
            id: candidate.id
        }
        return dto;
    }
}