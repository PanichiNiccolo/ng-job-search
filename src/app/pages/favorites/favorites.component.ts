import {Component, OnInit} from '@angular/core';
import {JobMinimalDTO} from "../../models/job-minimal.model";
import {LocalStorageService} from "../../services/local-storage.service";
import {JobComponent} from "../../components/job/job.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    JobComponent,
    CommonModule
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit{

  favoriteJobList: JobMinimalDTO[] = [];

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.favoriteJobList = this.localStorageService.getFavoriteJobList();
  }

}
