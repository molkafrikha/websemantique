import { Component } from '@angular/core';
import { AdminService } from './../../../services/adminService';
import { Users } from '../../../models/users'
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent {
  admins: Users[] = [];
  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.getAdmins();
}

getAdmins(): void {
  this.adminService.getAdmins().subscribe(
    (data: any) => { // Keep using 'any' to capture the response type
      console.log('Received data:', data); // Log the received data
      console.log('Type of data:', typeof data); // Log the type of the response
      console.log('Is Array:', Array.isArray(data)); // Check if it's an array

      // Check if the 'entities' property exists and is an array
      if (data.entities && Array.isArray(data.entities)) {
        this.admins = data.entities.filter(user => user.role === 'Administrator'); // Adjust the role filter as needed
      } else {
        console.error('Entities array is missing or not an array:', data);
      }
    },
    (error) => {
      console.error('Erreur lors de la récupération des administrateurs :', error);
    }
  );
}


}


