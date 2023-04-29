import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  loginText = 'Login';
  signUpText = 'Sign Up'; 
  lessons = ['Lesson 1', 'Lessons 2'];

  login() {
      console.log('Login');
  }

  signUp() {
      console.log('Sign Up');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
