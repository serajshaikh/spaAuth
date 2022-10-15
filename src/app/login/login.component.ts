import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private routes: Router) { }
  ngOnInit(): void {
    this.signInForm = this.formbuilder.group({
      name: [""],
      pass: [""]
    });

  }
  signIn() {
    this.http.get<any>('http://localhost:3000/user').subscribe((res) => {
      const user=res.find((a:any)=>{
          // console.log(a);
          // console.log(a.pass);
          return a.name==this.signInForm.value.name && a.pass==this.signInForm.value.pass;
      })
      if(user){
        alert("Thanks For Subscribing my Service");
        this.signInForm.reset;
      }
      else{
        alert("Sahi password dalo yaar!!😎")
      }
    })
  }

}
