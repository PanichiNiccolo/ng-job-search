import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JobMinimalDTO} from "../models/job-minimal.model";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private readonly JOBS_API_PATH: string = 'jobs';
  options = {};

  constructor(private httpClient: HttpClient) { }

  getJobList() {
    return this.httpClient.get<JobMinimalDTO[]>(this.JOBS_API_PATH, this.options);
  }
}
