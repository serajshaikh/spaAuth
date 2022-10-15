import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!:FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient,private routes:Router) { }
  ngOnInit(): void {
  this.signupForm=this.formbuilder.group({
    name:[""],
    pass:[""],
    email:[""]
  });

  }
  signup(){
    this.http.post<any>('http://localhost:3000/user',this.signupForm.value).subscribe(res=>{
      alert("Data saved in db.json file");
      console.log(res);
    })
  }
/*   signup(){
    this.http.post<any>('http://localhost:3000/employee',this.signupForm.value).subscribe(res=>{
      // alert(res);
      console.log(res);
    })
  } */

}
