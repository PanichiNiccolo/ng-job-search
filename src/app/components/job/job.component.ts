import {Component, Input} from '@angular/core';
import {JobMinimalDTO} from "../../models/job-minimal.model";
import {CommonModule} from "@angular/common";
import {LocalStorageService} from "../../services/local-storage.service";
import {StarHighlightDirective} from "../../directives/star-highlight.directive";
import {RouterLink} from "@angular/router";
import {LinkHighlightDirective} from "../../directives/link-highlight.directive";

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    CommonModule,
    StarHighlightDirective,
    RouterLink,
    LinkHighlightDirective
  ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {

  @Input() job: JobMinimalDTO | undefined;
  @Input() showStar: boolean = true;
  @Input() isFavorite: boolean = false;

  constructor(private localStorageService: LocalStorageService) {}

  protected manageFavorite() {
    if (this.job) {
      if (this.isFavorite) {
        this.localStorageService.removeFavoriteJob(this.job);
      } else {
        this.localStorageService.addFavoriteJob(this.job);
      }
    }
  }

}
