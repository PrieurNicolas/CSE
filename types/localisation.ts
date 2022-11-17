export interface localisationTypes {
  address: string;
  zipCode: number;
  city: string
}

export interface localisationId extends localisationTypes {

  id: number;

}