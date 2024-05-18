import {Router} from "@angular/router";
import {Route} from "../constants/routes";
import {Injectable} from "@angular/core";

@Injectable()
export class NavigateToService {

  constructor(private router: Router) {}
  navigateToHome() {this.router.navigate([Route.home])}
  navigateToLogin() {this.router.navigate([Route.login])}
  navigateToRegister() {this.router.navigate([Route.register])}
  navigateToSettings() {this.router.navigate([Route.settings])}
  navigateToMessages() {this.router.navigate([Route.messages])}
  navigateToMessageDetails() {this.router.navigate([Route.messages, '/', Route.messageDetails])}
  navigateToTp() {this.router.navigate([Route.tp])}
  navigateToTpDetails() {this.router.navigate([Route.tp, '/', Route.tpDetails])}
  navigateToTpEdit() {this.router.navigate([Route.tp, '/', Route.tpEdit])}
}
