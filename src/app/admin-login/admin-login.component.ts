import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  username="";
  password="";
  errorMsg="";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private auth:AuthService ,private router: Router){

  }

  login(){
    if(this.username.trim().length === 0){
      this.errorMsg = "Username is required";
    }else if(this.password.trim().length === 0){
      this.errorMsg = "password is required";
    }else{
      this.errorMsg="";
      let res = this.auth.login(this.username,this.password);
      if(res === 200){
        this.router.navigateByUrl('admin')
      }
      if(res === 403){
        this.errorMsg="Invalid credentials";
      }
    }
  }
}
