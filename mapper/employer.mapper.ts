import { EmployerDTO } from "../DTO/employer.dto";
import { degreeTypes } from "../types/degree";
import { periodTypes } from "../types/period";

export class EmployerMapper {
    static mapToDto(Employer: any): EmployerDTO | null {
        if (Employer === null) return null;        
        const dto: EmployerDTO = {
            User: {
                email: Employer.User.email,
                phone: Employer.User.phone,
                Localisation: {
                    id: Employer.User.Localisation.id,
                    address: Employer.User.Localisation.address,
                    zipCode: Employer.User.Localisation.zipCode,
                    city: Employer.User.Localisation.city,
                },
                Period: Employer.User.Periods.map((p: periodTypes) => ({ periodname: p.periodname })),
                Degree: Employer.User.Degrees.map((d: degreeTypes) => ({ degreename: d.degreename })),
            },
            siret: Employer.siret,
            structurename: Employer.structurename,
            id: Employer.id
        }
        return dto;
    }
}