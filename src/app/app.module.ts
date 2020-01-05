import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { MaterialModule } from './material.module/material.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './account/forgotpassword/forgotpassword.component';
import { ProfileComponent } from './account/profile/profile.component';
import { AuthService } from './account/authservice.service';
import { AuthGuard } from './account/auth.guard';
import { FooterComponent } from './footer/footer.component';
import { DeactivateGuard } from './account/auth.guard.service';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditDetailComponent } from './account/profile/edit-detail/edit-detail.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    FooterComponent,
    SidenavComponent,
    NavigationBarComponent,
    EditDetailComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FlexLayoutModule,
  ],
  providers: [AuthService, AuthGuard, DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
