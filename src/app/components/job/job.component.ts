import {Component, Input} from '@angular/core';
import {JobMinimalDTO} from "../../models/job-minimal.model";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {

  @Input() job: JobMinimalDTO | undefined;
  @Input() showStar: boolean = true;

}
