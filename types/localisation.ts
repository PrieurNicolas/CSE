export interface localisationTypes {
  address: string;
  zipCode: number;
  city: Date
}

export interface localisationId extends localisationTypes {

  id: number;

}