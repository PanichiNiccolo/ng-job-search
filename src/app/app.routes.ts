import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

//TODO: gestire il redirect alla home-page
