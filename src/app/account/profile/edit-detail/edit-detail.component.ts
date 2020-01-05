import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { DialogData } from '../profile.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService, userDetails } from '../../authservice.service';

export interface DialogData {
  id: number;
  company: string;
  address: string;
  zip_code: string;
  city: string;
  state_region: string;
  country: string;
}

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss']
})
export class EditDetailComponent implements OnInit {

  details: userDetails;
  isCompany: boolean;
  isAddress: boolean;
  isZip: boolean;
  isCity: boolean;
  isRegion: boolean;
  isCountry: boolean;

  credentials: DialogData = {
    id: 0,
    city: '',
    company: '',
    address: '',
    zip_code: '',
    state_region: '',
    country: '',
  };

  constructor(
    public dialogRef: MatDialogRef<EditDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private http: HttpClient, private auth: AuthService
  ) {}

    onNoClick(): void {
      this.dialogRef.close();
      console.log(this.credentials.company);
    }

    getUserProfile() {
      this.auth.profile().subscribe(
        user => {
          // console.log(user.user.id);
          this.details = user;
          return this.credentials.id = user.user.id;
        },
        err => {
          console.log(err);
        }
      );
    }

    onSave(): void {
      // console.log(this.credentials.id);
      this.auth.updateProfile(this.credentials).subscribe(
        user => {
          this.details = user;
        },
        err => {
          console.log(err);
        }
      );
      console.log(this.credentials);
      this.dialogRef.close();

    }

    updateProfile(detail: DialogData): Observable<any> {
      const base = this.http.post(`/api/updateprofile`, detail, {
        headers: { 'Content-Type': 'application/json' }
      });

      return base;
    }

    detectDataType() {
      this.isAddress = false;
      this.isCompany = false;
      this.isCity = false;
      this.isCountry = false;
      this.isRegion = false;
      this.isZip = false;

      if (this.data.company === 'company') {
        this.isCompany = true;
      }

      if (this.data.address === 'address') {
        this.isAddress = true;
      }

      if (this.data.city === 'city') {
        this.isCity = true;
      }

      if (this.data.state_region === 'stateRegion') {
        this.isRegion = true;
      }

      if (this.data.country === 'country') {
        this.isCountry = true;
      }

      if (this.data.zip_code === 'zipCode') {
        this.isZip = true;
      }

    }

  ngOnInit() {
    this.getUserProfile();
    this.detectDataType();
    console.log(this.data);
  }

}
