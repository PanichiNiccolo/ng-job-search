import {JobMinimalDTO} from "./job-minimal.model";

export interface JobDTO extends JobMinimalDTO {
  location: string;
  industries: string[];
  types: string[];
  description: string;
  publishDate: Date;
}
