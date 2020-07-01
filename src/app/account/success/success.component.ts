import { AuthService } from "./../authservice.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styleUrls: ["./success.component.scss"],
})
export class SuccessComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
