import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";
import {JobsComponent} from "./pages/jobs/jobs.component";
import {JobListResolver} from "./resolvers/JobListResolver";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'jobs',
        component: JobsComponent,
        resolve: {jobList: JobListResolver},
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'home/jobs',
  },
];

//TODO: metti ptima il dettaglio con il job/id e poi il job
