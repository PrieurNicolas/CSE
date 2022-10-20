export interface employerTypes {
  UserId: number;
  siret: BigInt;
  structurename: string;
}

export interface employerId extends employerTypes {

  id: number;

}