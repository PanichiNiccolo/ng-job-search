import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {JobMinimalDTO} from "../models/job-minimal.model";
import {JobService} from "../services/job.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobListResolver implements Resolve<JobMinimalDTO[]>{
  constructor(private jobService: JobService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<JobMinimalDTO[]> {
    return this.jobService.getJobList();
  }
}
