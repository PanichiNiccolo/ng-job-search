import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {JobMinimalDTO} from "../models/job-minimal.model";
import {JobService} from "../services/job.service";
import {inject} from "@angular/core";

export const JobListResolver: ResolveFn<JobMinimalDTO[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(JobService).getJobList();
};
