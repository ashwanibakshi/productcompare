import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headfoot',
  templateUrl: './headfoot.component.html',
  styleUrls: ['./headfoot.component.css']
})
export class HeadfootComponent implements OnInit {

  constructor(private dataService:DataService,private route:Router) { }

  ngOnInit() {
  }
    
  logout(){
    localStorage.clear();
    this.route.navigate(['/home/index'])
  }
}
