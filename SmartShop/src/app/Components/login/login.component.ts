import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public accService: AccountService) { }

  ngOnInit(): void {
    this.accService.acc = {Name: '' , Password: '', ConfirmPassword: ''};
  }

  loginUser()
  {
    this.accService.login().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
