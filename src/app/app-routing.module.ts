import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./account/login/login.component";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./account/signup/signup.component";
import { AuthGuard } from "./account/auth.guard";
import { ForgotpasswordComponent } from "./account/forgotpassword/forgotpassword.component";
import { ProfileComponent } from "./account/profile/profile.component";
import { AuthService } from "./account/authservice.service";
import { DeactivateGuard } from "./account/auth.guard.service";
import { EditDetailComponent } from "./account/profile/edit-detail/edit-detail.component";
import { CreateTaskComponent } from "./task/create-task/create-task.component";
import { TaskDetailsComponent } from "./task/task-details/task-details.component";
import { SuccessComponent } from "./account/success/success.component";
import { SuccessMsgComponent } from "./task/success-msg/success-msg.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },

  { path: "account/login", component: LoginComponent },

  { path: "account/signup", component: SignupComponent },

  { path: "account/success", component: SuccessComponent },

  { path: "forgotpassword", component: ForgotpasswordComponent },
  {
    path: "account/profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: "edit", component: EditDetailComponent, canActivate: [AuthGuard] },
  {
    path: "createtask",
    component: CreateTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "task/success-msg",
    component: SuccessMsgComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "taskdetails/:id",
    component: TaskDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService, AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
