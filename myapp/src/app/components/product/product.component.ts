import { Component, OnInit } from '@angular/core';
import { Router, Route, Routes, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dataService:DataService) { }
 prodct:any=[];

  ngOnInit() {
   this.getdata(this.route.snapshot.params['id']);
  }

  getdata(a){
    this.dataService.getproductdetails(a).subscribe((data):any=>{
      if(data['success']==true){
        this.prodct=data['da']
        console.log('ddf',this.prodct)
      }
      else{
        alert('no data found')
      }
    },error=>{
      alert('server error ocurred')
    })
  }

}
