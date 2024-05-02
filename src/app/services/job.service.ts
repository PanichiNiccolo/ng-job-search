import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JobMinimalDTO} from "../models/job-minimal.model";
import {JobDTO} from "../models/job.model";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private readonly JOBS_API_PATH: string = 'jobs';

  constructor(private httpClient: HttpClient) { }

  getJobList(): Observable<JobMinimalDTO[]> {
    return this.httpClient.get<JobMinimalDTO[]>(this.JOBS_API_PATH);
  }

  getJobById(id: number): Observable<JobDTO> {
    return this.httpClient.get<JobDTO>(this.JOBS_API_PATH + `/${id}`);
  }
}
