import { UserDTOAffichage } from "./user.dto";

export interface CandidateDTO {
    firstname: string,
    lastname: string,
    birthday: Date,
    wantToBe: string,
    User : UserDTOAffichage,
}