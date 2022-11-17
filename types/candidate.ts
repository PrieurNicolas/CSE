export interface candidateTypes {
  UserId: number;
  firstname: string;
  lastname: string;
  birthday: Date;
  wantToBe: string;
}

export interface candidateId extends candidateTypes {

  id: number;

}