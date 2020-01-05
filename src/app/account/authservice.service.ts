import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface userDetails {
  id: number;
  name: string;
  phone_number: number;
  email: string;
  password: string;
  exp: number;
  iat: number;
  company: string;
  address: string;
  zip_code: string;
  city: string;
  state_region: string;
  country: string;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  id: number;
  name: string;
  phone_number: number;
  email: string;
  password: string;
}

export interface DialogData {
  id: number;
  company: string;
  address: string;
  zip_code: string;
  city: string;
  state_region: string;
  country: string;
}

export interface ConfirmPassword {
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  username: string;
  password: string;

  constructor(private http: HttpClient,
              private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('userToken', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('userToken');
    }
    return this.token;
  }

  private getUserDetails(): userDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public register(user: TokenPayload): Observable<any> {
    const base = this.http.post(`/api/register`, user, {
      headers: { 'Content-Type': 'application/json' }
    });

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(
      `/api/login`,
      {email: user.email, password: user.password },
      {
        headers: { 'Content-Type': 'application/json' }
      });

    console.log(user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public profile(): Observable<any> {
    return this.http.get(`/api/profile`, {
      headers: { Authorization: `Bearer ${this.getToken()}` }
    });
  }

  public updateProfile(detail: DialogData): Observable<any> {
    const base = this.http.post(`/api/updateprofile`, detail, {
      headers: { 'Content-Type': 'application/json' }
    });

    return base;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/account/login');
  }


}
