import { UserDTOAffichage } from "./user.dto";

export interface EmployerDTO {
    siret: BigInt,
    structurename: string,
    User : UserDTOAffichage
}