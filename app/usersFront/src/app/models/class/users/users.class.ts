
export class UserResClass /* implements UserRes */ {


    /* properties */
    users : User[] = [
        {
            userId : 1,
            firstName : 'christian',
            lastName :  'garcia',
            email: 'christian@gmail.com',
            gender: 'male',
            active: false/* ,
            comment : [
                { tittle : 'primer comentario' , comment : 'typescript mola de verdad' },
                { tittle : 'segundo comentario' , comment : 'vamos a aprender las diferencias entre for y map en js' }
            ] */
        },
        {
            userId : 1,
            firstName : 'fernando',
            lastName :  'fernan',
            email: 'fernando@gmail.com',
            gender: 'male',
            active: false/* ,
            comment : [
                { tittle : 'primer comentario' , comment : 'fernando : typescript mola de verdad' },
                { tittle : 'segundo comentario' , comment : 'fernando : vamos a aprender las diferencias entre for y map en js' }
            ] */
        },
        {
            userId : 1,
            firstName : 'ramon',
            lastName :  'garcia',
            email: 'ramon@gmail.com',
            gender: 'male',
            active: false/* ,
            comment : [
                { tittle : 'primer comentario' , comment : 'ramon : typescript mola de verdad' },
                { tittle : 'segundo comentario' , comment : 'ramon : vamos a aprender las diferencias entre for y map en js' }
            ] */
        }
    ]

    

    /* constructor( userId :number , firstName:string , lastName:string , email:string , gender:string , active:boolean ){

        userId = this.userId;
        firstName = this.firstName;
        lastName = this.lastName;
        email = this.email;
        gender = this.gender;
        active = this.active;

    } */

}

export class CommentClass {
    "comment" : {tittle : string , comment : string , respectfull : boolean}[] = [
        {
            "tittle" : '' , "comment" : '' , "respectfull" : false
        }
    ];
}

export interface User {
    
    userId:number , 
    firstName: string , 
    lastName:  string , 
    email: string , 
    gender:string , 
    active:boolean , 
        
}