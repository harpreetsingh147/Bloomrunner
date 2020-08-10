export class RegisterModel {
    constructor() { }
    public id: number;
    public Password: string;
    public Email: string;
    public User: UserModel;
}
export class UserModel {
    public id: number;
    public FirstName: string;
    public LastName: string;
    public UserName: string;
    public City: string;
    public Country: string;
    public Street: string;
    public State: string;
    public ZipCode: string;
    public PhoneNumber: string;
    public profileImage:string;
}