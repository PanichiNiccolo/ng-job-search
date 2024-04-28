import {ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {JobMinimalDTO} from "../models/job-minimal.model";
import {JobService} from "../services/job.service";
import {inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";

/*export const JobListResolver: ResolveFn<JobMinimalDTO[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  jobService: JobService = inject(JobService)
): Observable<JobMinimalDTO[]> => jobService.getJobList()*/

@Injectable({
  providedIn: 'root'
})
export class JobListResolver {
  constructor(private jobService: JobService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<JobMinimalDTO[]> {
    return this.jobService.getJobList();
  }
}
