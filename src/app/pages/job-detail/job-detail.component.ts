import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, RouterLink} from "@angular/router";
import {JobDTO} from "../../models/job.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit{

  job: JobDTO | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (res: Data) => {
        if (res['job']) {
          this.job = res['job'];
        }
      },
      error: (err) => console.log('Error during retrieving job detail' + err),
    });
  }

}
