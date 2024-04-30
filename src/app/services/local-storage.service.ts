import { Injectable } from '@angular/core';
import {JobMinimalDTO} from "../models/job-minimal.model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly FAVORITE_JOB_LIST: string = 'favoriteJobList';

  constructor() { }

  public addFavoriteJob(job: JobMinimalDTO): void {
    const localStorageData: string | null = localStorage.getItem(this.FAVORITE_JOB_LIST);
    let favoriteJobList: JobMinimalDTO[] = [];

    if (localStorageData != null) {
      favoriteJobList = JSON.parse(localStorageData);
    }

    if (!favoriteJobList.some((favoriteJob: JobMinimalDTO) => favoriteJob.id === job.id)) {
      favoriteJobList.push(job);
      this.removeJobFavoriteList();
      this.saveFavoriteJobList(favoriteJobList);
    } else {
      console.log(`job with id ${job.id} is already favorite`);
    }
  }

  public removeFavoriteJob(job: JobMinimalDTO): void {
    const localStorageData: string | null = localStorage.getItem(this.FAVORITE_JOB_LIST);
    let favoriteJobList: JobMinimalDTO[] = [];

    if (localStorageData != null) {
      favoriteJobList = JSON.parse(localStorageData);
    }

    const indexToRemove: number = favoriteJobList.findIndex((favoriteJob: JobMinimalDTO) => favoriteJob.id === job.id);
    if (indexToRemove >= 0) {
      favoriteJobList.splice(indexToRemove, 1);
      this.removeJobFavoriteList();
      this.saveFavoriteJobList(favoriteJobList);
    } else {
      console.log(`job with id ${job.id} is not favorite`);
    }
  }

  public checkIfJobIsFavorite(job: JobMinimalDTO): boolean {
    const localStorageData: string | null = localStorage.getItem(this.FAVORITE_JOB_LIST);

    if (localStorageData == null) {
      return false;
    }

    let favoriteJobList: JobMinimalDTO[] = JSON.parse(localStorageData);
    return  favoriteJobList.some((favoriteJob: JobMinimalDTO) => favoriteJob.id === job.id);
  }

  public getFavoriteJobList(): JobMinimalDTO[] {
    const localStorageData: string | null = localStorage.getItem(this.FAVORITE_JOB_LIST);

    let favoriteJobList: JobMinimalDTO[] = [];

    if (localStorageData != null) {
      favoriteJobList = JSON.parse(localStorageData);
    }

    return favoriteJobList;
  }

  private saveFavoriteJobList(favoriteJobList: JobMinimalDTO[]): void {
    localStorage.setItem(this.FAVORITE_JOB_LIST, JSON.stringify(favoriteJobList));
  }

  private removeJobFavoriteList(): void {
    localStorage.removeItem(this.FAVORITE_JOB_LIST);
  }
}
