export interface candidateTypes {
  UserId: number;
  firstname: string;
  lastname: string;
  birthday: Date
}

export interface candidateId extends candidateTypes {

  id: number;

}