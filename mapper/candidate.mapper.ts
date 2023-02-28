import { CandidateDTO } from "../DTO/candidate.dto";
import { degreeTypes } from "../types/degree";
import { periodTypes } from "../types/period";

export class CandidateMapper {
    static mapToDto(candidate: any): CandidateDTO | null {
        if (candidate === null) return null;        
        const dto: CandidateDTO = {
            firstname: candidate.firstname,
            lastname: candidate.lastname,
            birthday: candidate.birthday,
            wantToBe: candidate.wantToBe,
            User: {
                email: candidate.User.email,
                phone: candidate.User.phone,
                Localisation: {
                    address: candidate.User.Localisation.address,
                    zipCode: candidate.User.Localisation.zipCode,
                    city: candidate.User.Localisation.city,
                },
                Period: candidate.User.Periods.map((p:periodTypes) => ({periodname: p.periodname})),
                Degree: candidate.User.Degrees.map((d:degreeTypes) => ({degreename: d.degreename})),
            }
        }
        return dto;
    }
}