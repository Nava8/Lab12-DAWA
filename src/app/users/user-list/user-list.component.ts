import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'John', email:'John@gmail.com', numero:956923444, sexo:'Masculino'},
    { id: 2, name: 'Jane', email:'Jane@gmail.com', numero:956923444, sexo:'Femenino'},
    { id: 3, name: 'Does', email:'Does@gmail.com', numero:956923444, sexo:'Masculino'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectedUser: any;

  @Output() userSelected: EventEmitter<any> = new EventEmitter<any>();

  NewUserSelected(user: any) {
    this.selectedUser = user;
    this.userSelected.emit(user);
  }
  
}
