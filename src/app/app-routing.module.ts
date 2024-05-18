import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Route} from "./constants/routes";
import {AppComponent} from "./app.component";
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';

const routes: Routes = [
  {
    path: Route.login,
    component: LoginComponent
  },
  {
    path: Route.register,
    component: RegistrationComponent
  },
  {
    path: Route.settings,
    component: AppComponent
  },
  {
    path: Route.home,
    component: AppComponent
  },
  {
    path: Route.tp,
    children: [
      {
        path: '',
        component: AppComponent
      },
      {
        path: Route.tpDetails,
        component: AppComponent
      },
      {
        path: Route.tpEdit,
        component: AppComponent
      },
    ]
  },
  {
    path: Route.messages,
    children: [
      {
        path: '',
        component: AppComponent
      },
      {
        path: Route.messageDetails,
        component: AppComponent
      },
    ]
  },
  {
    path: Route.theyTrustMe,
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }