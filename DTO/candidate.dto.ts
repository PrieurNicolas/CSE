import { UserDTOAffichage } from "./user.dto";

export interface CandidateDTO {
    id: number,
    firstname: string,
    lastname: string,
    birthday: Date,
    wantToBe: string,
    User : UserDTOAffichage,
}