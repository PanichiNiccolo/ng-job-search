import {Component, OnInit} from '@angular/core';
import {JobListComponent} from "../../components/job-list/job-list.component";
import {ActivatedRoute, Data} from "@angular/router";
import {JobMinimalDTO} from "../../models/job-minimal.model";
import {CommonModule} from "@angular/common";
import {JobComponent} from "../../components/job/job.component";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    CommonModule,
    JobListComponent,
    JobComponent
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{

  jobList: JobMinimalDTO[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (res: Data) => {
        if (res['jobList']) {
          this.jobList = res['jobList'];
        }
      },
      error: (err) => console.log("Error during retrieving jobs list: " + err),
    });
  }

  protected getIsFavoriteJob(job: JobMinimalDTO): boolean {
    return this.localStorageService.checkIfJobIsFavorite(job);
  }
}
