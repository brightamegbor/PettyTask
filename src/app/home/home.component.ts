import { Component, OnInit } from "@angular/core";
import { AuthService } from "../account/authservice.service";

export interface Tasks {
  id: string;
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
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  tasks: Tasks[] = [
    {
      id: "der345dft42dfdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/feedbackImage.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },

    {
      id: "der23345dft42dfdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/supportIcon.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },

    {
      id: "der345dft4rfgfdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/helpImage.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },
    {
      id: "der34jhgfgft42dfdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/feedbackImage.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },
    {
      id: "der345dft3dfddd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/helpImage.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },
    {
      id: "der34343dft42dfdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/supportIcon.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },
    {
      id: "der345dft4wefdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/feedbackImage.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },
    {
      id: "derrt34dft42dfdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/inviteImage.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },
    {
      id: "der345dft345fdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/helpImage.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },
    {
      id: "der3452342342dfdd12sdsdsd",
      user: "Philip",
      type: "Campus",
      typeValue: "KTU",
      category: "Assignment",
      jobTitle: "Complete my Java Assignment",
      amount: "10",
      attachment: "assets/images/feedbackImage.png",
      description:
        "help me finish my java assignment, you are to design a simple calculator",
      position: 1,
    },
  ];

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
