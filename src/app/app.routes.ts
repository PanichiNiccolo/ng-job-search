import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";
import {JobsComponent} from "./pages/jobs/jobs.component";
import {JobListResolver} from "./resolvers/JobListResolver";
import {JobResolver} from "./resolvers/JobResolver";
import {JobDetailComponent} from "./pages/job-detail/job-detail.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'detail/:id',
        component: JobDetailComponent,
        resolve: {job: JobResolver},
      },
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
