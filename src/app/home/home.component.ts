import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: User[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get<User[]>('https://localhost:5002/api/users').subscribe({
      next: (response: User[]) => {
        this.users = response;
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }

  cancelRegistrationMode($event: boolean) {
    this.registerMode = $event;
  }
}
