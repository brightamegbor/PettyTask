import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

export interface Tasks {
  id: string;
  user: string;
  rateTime: string;
  type: string; //school or region
  typeValue: string; //school or region value
  category: string;
  jobTitle: string;
  position: number;
  amount: string;
  attachment: string;
  description: any;
  phone_number: string;
}

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.scss"],
})
export class TaskDetailsComponent implements OnInit {
  accepted: string = "no";
  constructor(private router: Router) {}

  tasks: Tasks[] = [
    {
      id: "der345dft42dfdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      rateTime: "1",
      typeValue: "KTU, HTU, ATU, KNUST",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/feedbackImage.png",
      description:
        "<p>1. You are to write a programme in JavaFx to take input from a user.</p>" +
        "<p>2. The programme will take in 5 different numbers, multiply each one with the lowest.</p>" +
        "<p>3. The result should then be matched with one another to determine the highest and the lowest respectively.</p>",
      position: 1,
      phone_number: "0558317703",
    },
  ];

  ngOnInit() {}

  accept(e: string): void {
    this.accepted = e;
  }

  isTask(name: string): boolean {
    if (!this.accepted) {
      return false;
    }

    return this.accepted === name;
  }

  decline(): void {
    this.router.navigateByUrl("/home");
  }

  onSubmit(): void {
    this.router.navigateByUrl("/task/success-msg");
  }
}
