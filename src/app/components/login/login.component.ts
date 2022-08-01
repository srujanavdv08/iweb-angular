import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showError: boolean = false;
  loginForm: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value).subscribe((res:any) => {
        if(res.status){
          localStorage.setItem('token', res?.data?.token);
          this.router.navigate(['']);
        } else {
        }
      })
    } else {
      this.showError = true;
    }
  }

}
