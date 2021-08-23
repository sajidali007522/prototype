import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ServicesComponent} from "./components/services/services.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about-us", component: AboutComponent},
  {path:"services", component: ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
