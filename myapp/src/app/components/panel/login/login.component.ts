import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService:DataService,private route:Router) { }

  ngOnInit() {
  }
  
   login(a:NgForm){
    //  alert('sdf')
    //  console.log(a.controls['email'].value)
    const x={
      email:a.controls['email'].value,
      password:a.controls['password'].value
    }
    this.dataService.login(x).subscribe((data):any=>{
      if(data['success']==true){
        this.dataService.storeUserData(data['token'],data['user'])
         this.route.navigate(['/admin/dashboard'])
      }
      else{
        alert('email password didnt match')
      }
    },error=>{
       alert('server errror occured')
    })
   }
}
