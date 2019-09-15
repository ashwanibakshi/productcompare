import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataService:DataService,private route:Router) { }

  ngOnInit() {
  }

  register(a:NgForm){
    const x={
      name:a.controls['user'].value,
      email:a.controls['email'].value,
      password:a.controls['password'].value
    }
     this.dataService.adduser(x).subscribe((data):any=>{
       if(data['success']==true){
         this.route.navigate(['/admin/login'])
       }
       else{
         alert('invalid email & password')
       }
     },error=>{
        alert('server error occured');
     })
  }

}
