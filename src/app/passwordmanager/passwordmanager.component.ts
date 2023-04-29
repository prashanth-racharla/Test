import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { PasswordService } from '../services/password.service';

@Component({
  selector: 'app-passwordmanager',
  templateUrl: './passwordmanager.component.html',
  styleUrls: ['./passwordmanager.component.css']
})
export class PasswordmanagerComponent implements OnInit {

  username:string="";
  password:string="";
  sourceurl:string="";
  websitename:string="";
  obj:LoginDetailsModel;
  
  constructor(private ps : PasswordService) { 
    this.obj = new LoginDetailsModel();
    
    
  }

  ngOnInit(): void {
     
  }

  saveLoginDetails(){
  
    this.obj.username = this.username;
    this.obj.password = this.password;
    this.obj.sourceurl = this.sourceurl;
    this.obj.websitename = this.websitename;
    console.log(this.obj);
  }

  clearForm(){
    this.username = "";
    this.password = "";
    this.sourceurl = "";
    this.websitename = "";
    this.obj = new LoginDetailsModel();
  }


}

export class LoginDetailsModel{
  username:string="";
  password:string="";
  sourceurl:string="";
  websitename:string="";
  createdDateTime:Date=new Date();
}
