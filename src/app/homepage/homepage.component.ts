import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralConstants} from "../constants/general-constants";

@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  APP_NAME = GeneralConstants.APP_NAME;
  theyTrustMeCondition: boolean = true;

  constructor(private router: Router) {}

  logout(): void {

    console.log('User logged out');
    this.router.navigate(['/login']);
  }
}
