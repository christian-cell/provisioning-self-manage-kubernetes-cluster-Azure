import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserResClass } from 'src/app/models';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:                                      HttpClient
  ) { }

  LoadUsers():Observable<UserResClass>{

    return this.http.get<UserResClass>( `${environment.apiUrl}UserEF/GetUsers` );

  }

  InsertNewUsers( user : User ):Observable<UserResClass>{

    return this.http.post<UserResClass>(`${environment.apiUrl}UserEF/AddUser` , user);

  }
}
