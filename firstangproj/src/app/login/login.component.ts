import { Component, OnInit } from '@angular/core';
import{ Userl } from '../userl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userModell=new Userl('','');
}
