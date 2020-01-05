import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService, userDetails } from './../../account/authservice.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  details: userDetails;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService) {}

  ngOnInit() {
    this.getUserProfile();
   }

  getUserProfile() {
    if (this.authService.isLoggedIn) {
      this.authService.profile().subscribe(
        user => {
          this.details = user;
        },
        err => {
          console.log(err);
        }
      );
    }


  }

}
