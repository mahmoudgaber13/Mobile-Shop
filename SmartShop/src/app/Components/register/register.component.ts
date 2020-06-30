import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public accService: AccountService , private router: Router) { }

  ngOnInit(): void {
    this.accService.acc = {Name: '' , Password: '', ConfirmPassword: ''};

  }
  regUser()
  {
    this.accService.register().subscribe(res => {
      this.router.navigateByUrl('/login');
    },
    err => {console.log(err); }
    );
  }
}
