import {Component, OnInit} from '@angular/core';
import {JobListComponent} from "../../components/job-list/job-list.component";
import {ActivatedRoute, Data} from "@angular/router";
import {JobMinimalDTO} from "../../models/job-minimal.model";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    JobListComponent
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{

  jobList: JobMinimalDTO[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (res: Data) => {
        this.jobList = res['jobList'];
      },
      error: (err) => console.log("Error during retrieving jobs list: " + err),
    });
  }
}
