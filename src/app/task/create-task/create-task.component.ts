import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

export interface Task {
  name: string;
  checked: string;
}

export interface CreateTask {
  user: string;
  type: string; //school or region
  typeValue: string; //school or region value
  category: string;
  jobTitle: string;
  position: number;
  amount: string;
  attachment: string;
  description: string;
}

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.scss"],
})
export class CreateTaskComponent implements OnInit {
  targetGroup: string;
  selected: string = "campus";
  createTaskForm: FormGroup;

  targets: Task[] = [
    { name: "campus", checked: "campus" },
    { name: "region", checked: "region" },
  ];

  isSchool: boolean;
  isRegion: boolean;

  schools: Array<any> = [
    "All",
    "KNUST",
    "UG",
    "UEW",
    "UCC",
    "TTU",
    "ATU",
    "KsTU",
    "KTU",
    "HTU",
  ];

  regions: Array<any> = [
    "All",
    "Greater Accra",
    "Eastern",
    "Western",
    "Central",
    "Volta",
    "Northern",
    "Ashanti",
    "Brong Ahafo",
  ];

  categories: Array<any> = [
    "All",
    "Survey",
    "Mobile Application",
    "Complete Assignment",
    "Testing",
    "Promotion",
    "Download/Install",
    "Write Article",
    "Signup",
  ];

  showSelect = new FormControl(false);

  createTask: CreateTask = {
    user: "",
    type: "",
    typeValue: "",
    jobTitle: "",
    category: "",
    amount: "",
    attachment: "",
    position: 0,
    description: "",
  };

  constructor() {
    this.createTaskForm = this.createTaskFormGroup();
  }

  setradio(e: string): void {
    this.selected = e;
  }

  isSelected(name: string): boolean {
    if (!this.selected) {
      return false;
    }

    return this.selected === name;
  }

  createTaskFormGroup() {
    return new FormGroup({
      campus: new FormControl(""),
      region: new FormControl(""),
      school: new FormControl(""),
      regionValue: new FormControl(""),
      category: new FormControl(""),
      jobTitle: new FormControl(""),
      position: new FormControl(""),
      amount: new FormControl(""),
      attachment: new FormControl(""),
      description: new FormControl(""),
    });
  }

  submitTask() {
    console.log("");
  }

  ngOnInit() {
    this.isRegion = false;
    this.isSchool = false;
    console.log(this.targetGroup);
  }

  // triggerResize() {
  //   // Wait for changes to be applied, then trigger textarea resize.
  //   this._ngZone.onStable.pipe(take(1))
  //       .subscribe(() => this.autosize.resizeToFitContent(true));
  // }
}
