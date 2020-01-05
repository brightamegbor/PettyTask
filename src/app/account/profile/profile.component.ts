import { Observable } from 'rxjs';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { AuthService, userDetails } from '../authservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditDetailComponent } from './edit-detail/edit-detail.component';

export interface DialogData {
  company: string;
  address: string;
  zip_code: string;
  city: string;
  state_region: string;
  country: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  details: userDetails;
  company: string;
  address: string;
  zip_code: string;
  city: string;
  state_region: string;
  country: string;

  constructor(private authService: AuthService,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.getUserProfile();
   }


  openDialog(type: string): void {
    if (type === 'company') {
      this.dialog.open(EditDetailComponent, {
        width: '300px',
        data: {
          company: 'company',
    }
      });
    }

    if (type === 'address') {
      this.dialog.open(EditDetailComponent, {
        width: '300px',
        data: {
          address: 'address',
    }
      });
    }

    if (type === 'zipCode') {
      this.dialog.open(EditDetailComponent, {
        width: '300px',
        data: {
          zip_code: 'zipCode',
    }
      });
    }

    if (type === 'city') {
      this.dialog.open(EditDetailComponent, {
        width: '300px',
        data: {
          city: 'city',
    }
      });
    }

    if (type === 'stateRegion') {
      this.dialog.open(EditDetailComponent, {
        width: '300px',
        data: {
          state_region: 'stateRegion',
    }
      });
    }

    if (type === 'country') {
      this.dialog.open(EditDetailComponent, {
        width: '300px',
        data: {
          country: 'country',
    }
      });
    }

  //   const dialogRef = this.dialog.open(EditDetailComponent, {
  //     width: '300px',
  //     data: {
  //       company: this.company,
  //       address: this.address,
  //       zipCode: this.zipCode,
  //       city: this.city,
  //       stateRegion: this.stateRegion,
  //       country: this.country
  // }
  //   });

    // dialogRef.afterClosed().subscribe(
    //   result => {
    //     // console.log(result);
    //     this.company = result;
    //     this.address = result;
    //     this.zipCode = result;
    //     this.city = result;
    //     this.stateRegion = result;
    //     this.country = result;
    //   }
    // );
  }

  getUserProfile(): Observable<any> {
    this.authService.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.log(err);
      }
    );

    return;
  }
}

