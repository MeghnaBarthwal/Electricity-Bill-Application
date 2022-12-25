import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private auth:AuthService ,private router: Router){

  }

  goToHome(){
    this.router.navigate(['home']);
  }

  consumer(){
    this.router.navigateByUrl('consumer');
  }
}
