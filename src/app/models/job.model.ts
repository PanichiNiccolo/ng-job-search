import {JobMinimalDTO} from "./job-minimal.model";

export class JobDTO extends JobMinimalDTO {
  location: string;
  industries: string[];
  types: string[];
  description: string;
  publishDate: Date;

  constructor(data: {id: number, companyName: string, title: string, companyLogo: string, reference: string, location: string, industries: string[], types: string[], description: string, publishDate: Date}) {
    super(data);
    this.location = data.location;
    this.description = data.description;
    this.publishDate = data.publishDate;
    this.industries = data.industries;
    this.types = data.types;
  }
}
