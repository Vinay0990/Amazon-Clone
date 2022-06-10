import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  loginStatus: boolean = false;
  submitStatus: boolean = false;

  constructor(private loginService: LoginService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitStatus = true;
    const result = this.loginService.checkPassword(
      this.form.get('email')?.value,
      this.form.get('password')?.value
    );

    console.log('Called', this.loginStatus, this.submitStatus);

    if (result == -1) {
      this.loginStatus = false;
    }
  }
}
