import { UserData } from './User.Model';

export class IdentityModel {
    constructor(
        public user: any,
        public isLoggedIn:boolean,
        public accessToken: string,
        public idToken: string) { }
}