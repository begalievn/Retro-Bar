import { IContactsPhotos } from "../footerTypes/footerTypes";

export interface IContacts{
    created: string,
    description:string,
    id:number,
    instagram:string,
    link:string,
    mail:string,
    phoneNumber:string,
    photo:null|string,
    photoUrl:string,
    photos:IContactsPhotos[],
    telegram:string,
    youtube:string,
}

