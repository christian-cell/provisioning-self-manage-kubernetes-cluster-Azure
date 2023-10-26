import { Injectable } from '@angular/core';
/* rxjs */
import { from, mergeMap } from 'rxjs';
/* models */
import { UserResClass } from 'src/app/models';
import { UsersService } from '../httpRequests/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersHelpersService {

  constructor(
    private userService :                                 UsersService
  ) { }

  BuildUsers():UserResClass{
    const myUsers = {  
      users : [
        {
          "userId": 2,
          "firstName": "roberto",
          "lastName": "garcia",
          "email": "roberto@gmail.com",
          "gender": "male",
          "active": true
        },
        {
          "userId": 3,
          "firstName": "fernando",
          "lastName": "garcia",
          "email": "fernando@gmail.com",
          "gender": "male",
          "active": true
        },
        {
          "userId": 4,
          "firstName": "ramon",
          "lastName": "garcia",
          "email": "ramon@gmail.com",
          "gender": "male",
          "active": true
        },
      ] 
    };

    return myUsers;
  }



  StoreMultipleUsers( usersRes : UserResClass ):void{
    const { users } = usersRes || {};

    const results$ = from( users ).pipe(
      mergeMap(( user , index ) => {

        return this.userService.InsertNewUsers(user);

      })
    )

    console.log('llega hasta aquí');

    setTimeout(() => {
      results$.subscribe(() => {
        console.log('insertamos los usuarios');
      })
    }, 10000);
  }

  FormatUsersRes( usersRes : UserResClass )/* :UserResClass */{
    
    /* 
    *  el reto consiste en añadir una propiedad 
    *  respectfull : boolean a false para el comentario con 
    *  titulo "primer comentario" y true para el que tenga el título de "segundo comentario" 
    *  usando for y map aprox
    */

    /* ___________________________________________-- MAP --_________________________________ */
    /* const { users } = usersRes || {};

    const myUsersArr = users.map(( u ) => {
      
      const { comment } = u || {};

      return { ...u , comment : comment.map(( c ) => {
        
        return c.tittle === 'primer comentario' ? { ...c , respectfull : false } : { ...c , respectfull : true };

      })}

    })

    const myUsers = { users : myUsersArr };

    return myUsers; */

    /* ___________________________________________-- FOR --_________________________________ */

    /* let myUsersRes = [];

    const { users } = usersRes || {};

    for (let i = 0; i < users.length; i++) {

      const { comment } = users[i] || {};

      let myCommentArray = [];

      for (let x = 0; x < comment.length; x++) {

        let myComent = comment[x].tittle === 'primer comentario' ? { ...comment[x] , respectfull : false} : { ...comment[x] , respectfull : true};
        
        myCommentArray.push(myComent);
        
      }

      myUsersRes.push({ ...users[i] , comment : myCommentArray });

    }

    const myUsers = { users : myUsersRes };

    return myUsers; */
  }

}
