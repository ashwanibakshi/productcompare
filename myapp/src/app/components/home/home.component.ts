import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService:DataService) { }

  prodct:any;

  ngOnInit() {
    this.dataService.getproduct().subscribe((data):any=>{
      if(data['success']==true){
          this.prodct=data['da'];
          console.log('dksjf',this.prodct)
      }
      else{
        alert('no data found')
      }
    },error=>{
      alert('server error.Try again!')
    })
  }
}
