import { DegreeDTO } from "./degree.dto"
import { LocalisationDTO } from "./localisation.dto"
import { PeriodDTO } from "./period.dto"

export interface UserDTO {
    id: number,
    email: string,
    phone: number,
}

export interface UserLoginDTO {
    id: number,
    email: string,
    password: string,
    role: string,
    idCE: number
}
export interface UserDTOAffichage {
    email: string,
    phone: number,
    image: string,
    Localisation : LocalisationDTO,
    isActif: boolean,
    Period : PeriodDTO[],
    Degree: DegreeDTO[]
}