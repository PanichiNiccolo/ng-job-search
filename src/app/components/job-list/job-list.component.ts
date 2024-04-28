import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
/*    this.jobService.getJobList().subscribe((res) => {
      console.log(res);
    })*/
  }
}
