import { Component, OnInit } from '@angular/core';
import { User } from './user';

import { UserService } from '../user.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[] = [];
  user:User;
  constructor(private userService:UserService) { }

  getUsers(): void {
   this.userService.getUsers().
   subscribe((users)=> {
     this.users = users;
     console.log(this.users);
   });
  }
  getUserById(id:number):void {
    this.userService.getUserById(id).
    subscribe((user) =>
    this.user= user);
  }
  ngOnInit() {
    
  }

}
