import { Component , OnInit } from '@angular/core';
import { UsersService } from './shared/services/httpRequests/users.service';
import { UserResClass } from './models';
import { UsersHelpersService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'usersFront';

  users :                                                       UserResClass = new UserResClass();

  constructor(
    private usersHelpersService:                                UsersHelpersService,
    private userService:                                        UsersService
  ){}

  ngOnInit(): void {
    this.GetUsers();
    this.StoreUsers();
  }

  StoreUsers():void{
    const myUsers = this.usersHelpersService.BuildUsers();

    this.usersHelpersService.StoreMultipleUsers( myUsers )
  }

  GetUsers():void{

    /* const myUsers = this.usersHelpersService.FormatUsersRes(this.users);

    console.log( myUsers ); */

    this.userService.LoadUsers().subscribe(( users: UserResClass ) => {
      this.users = users;
    })
  }

}
