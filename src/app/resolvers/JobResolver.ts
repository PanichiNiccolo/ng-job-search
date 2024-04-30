import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {JobService} from "../services/job.service";
import {inject} from "@angular/core";
import {of} from "rxjs";
import {JobDTO} from "../models/job.model";

export const JobResolver: ResolveFn<JobDTO | null> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const jobId: string | null = route.paramMap.get('id');
  if (!jobId) {
    return of(null);
  }
  return inject(JobService).getJobById(+jobId);
};
