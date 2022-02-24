import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,  private ruta: Router) {
    this.formLogin = this.formBuilder.group({
      user: ['', [Validators.minLength(3), Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }



  ngOnInit(): void {
  }

  get User() {
    return this.formLogin.get('user');

  }

  get Password() {
    return this.formLogin.get('password');
  }

  



}
