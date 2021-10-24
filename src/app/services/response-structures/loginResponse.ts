export interface LoginResponse{
    accessToken : string,
    user : User
};

interface User{
    dob : Date,
    email : string,
    id : number,
    username : string
}