import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Users} from "../../models/users";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Users[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: any) => { // Keep using 'any' to capture the response type


        if (data.entities && Array.isArray(data.entities)) {
          this.users = data.entities;
        } else {
          console.error('Entities array is missing or not an array:', data);
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des Utilisateurs :', error);
      }
    );
  }
}
