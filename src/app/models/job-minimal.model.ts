export class JobMinimalDTO {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;

  constructor(data: {id: number, companyName: string, title: string, companyLogo: string, reference: string}) {
    this.id = data.id;
    this.companyName = data.companyName;
    this.title = data.title;
    this.companyLogo = data.companyLogo;
    this.reference = data.reference
  }
}
