import { EmployerDTO } from "../DTO/employer.dto";
import { degreeId, degreeTypes } from "../types/degree";
import { periodId, periodTypes } from "../types/period";

export class EmployerMapper {
    static mapToDto(Employer: any): EmployerDTO | null {
        if (Employer === null) return null;        
        const dto: EmployerDTO = {
            User: {
                email: Employer.User.email,
                phone: Employer.User.phone,
                image: process.env.local +Employer.User.image,
                Localisation: {
                    id: Employer.User.Localisation.id,
                    address: Employer.User.Localisation.address,
                    zipCode: Employer.User.Localisation.zipCode,
                    city: Employer.User.Localisation.city,
                },
                Period: Employer.User.Periods.map((p: periodId) => ({ periodname: p.periodname, id: p.id })),
                Degree: Employer.User.Degrees.map((d: degreeId) => ({ degreename: d.degreename , id: d.id})),
            },
            siret: Employer.siret,
            structurename: Employer.structurename,
            id: Employer.id
        }
        return dto;
    }
}