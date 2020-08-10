export class UserData{
    constructor(
       public sub:string,
       public first_name:string,
       public last_name:string,
       public email:string,
       public email_verified:string,
       public profile_pic:string,
       public address_country:string,
       public address_state:string,
       public address_city:string,
       public address_zip_code:string){}
}
