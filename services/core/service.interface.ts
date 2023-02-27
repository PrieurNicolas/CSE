export interface IService<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[] | null>;
    create(t: T): Promise<T | null>;
    delete(id: number): Promise<number |boolean>;
    update(t: T, id: number): Promise<number |boolean>;
}

export interface IServiceToken<T, D> {
    findToken(t: string): Promise<T | null>;
    create(t: Omit<T, 'id'>): Promise<T | null>;
    update(t: Partial<T>, id: number): Promise<number |boolean>;
    findUser(email: string): Promise<D | null>;
    findUT(id: number): Promise<D | null>; 
}