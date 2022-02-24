import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../servicios/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private authentication:AuthenticationService, private ruta:Router) {
    this.form = this.formBuilder.group({
     
      nombreUsuario:['',Validators.required],
      password:['',Validators.required],
    });
  }
   

  ngOnInit(): void {
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  onSubmit(event:Event){
    event.preventDefault();
    console.log(this.form.value);
    this.authentication.login(this.form.value).subscribe(data=>{
     
      this.ruta.navigate(['/porfolio']);
    });
  }

}

