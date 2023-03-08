import { UserDTOAffichage } from "./user.dto";

export interface EmployerDTO {
    id: number,
    siret: BigInt,
    structurename: string,
    User : UserDTOAffichage
}