import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAccount } from 'src/Shared/iaccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  acc: IAccount;
  constructor(private httpClient: HttpClient) { }

  register()
  {
    return this.httpClient.post(`${environment.reg_URL}`, this.acc);
  }

  login()
  {
    return this.httpClient.post(`${environment.login_URL}`, this.acc);
  }
}
