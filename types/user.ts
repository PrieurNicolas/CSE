export interface userTypes {
  email: string;
  phone: number;
  isActif: boolean;
  password: string;
  LocalisationId: number;
}


export interface userId extends userTypes {

  id: number;

}

// A VIRER
export interface User {
  username: string;
  password: string;
}

declare global {
  namespace Express {
    interface Request {
      headers?: Headers;
      body?: Body;
      user?: User;
    }
  }
}
