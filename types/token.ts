export interface tokenTypes{

    refreshToken : string;
    tokenPush : string;
    UserId: number;
}


export interface tokenId extends tokenTypes {

    id : number;

}