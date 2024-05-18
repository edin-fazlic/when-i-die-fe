import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Route} from "./constants/routes";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: Route.login,
    component: AppComponent
  },
  {
    path: Route.register,
    component: AppComponent
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
