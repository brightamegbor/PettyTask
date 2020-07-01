import { Router } from "@angular/router";
import { AuthService, TokenPayload } from "./../authservice.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isInvalidCredentials: boolean;
  isFieldEmpty: boolean;

  credentials: TokenPayload = {
    id: 0,
    name: "",
    phone_number: null,
    email: "",
    password: "",
  };
  busy: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.busy = true;
    this.isInvalidCredentials = false;
    this.isFieldEmpty = false;

    if (this.credentials.email === "" || this.credentials.password === "") {
      this.isFieldEmpty = true;
      this.busy = false;
    } else {
      this.authService.login(this.credentials).subscribe(
        () => {
          this.router.navigateByUrl("/home");
        },
        (err) => {
          console.log(err);
          if (err["error"].error === "invalid_credential") {
            this.isInvalidCredentials = true;
            this.busy = false;
          }
        }
      );
    }
  }

  ngOnInit() {}
}
