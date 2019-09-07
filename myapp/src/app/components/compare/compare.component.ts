import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { getPreviousOrParentTNode } from '@angular/core/src/render3/state';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  constructor(private dataService:DataService,private route:ActivatedRoute) { }
  public a;
  ngOnInit() {
    this.getdata(this.route.snapshot.params['id'])
  }
   prodct:any=[];
   cprod:any;
   cname:any;
   cdesc:any;
   cprice:any;
  cat:any;
  pname:any=[];
   getdata(a){
    this.dataService.getproductdetails(a).subscribe((data):any=>{
      if(data['success']==true){
       this.prodct=data['da'];
       console.log(this.prodct)
       this.getprod(data['da']['category']);
      }
      else{
        alert('no data found')
      }
    },error=>{
      alert('server error occured.try again')
    })
   }

   getprod(a){
     console.log(a)
     const x={category:a}

     this.dataService.getpname(x).subscribe((data):any=>{
       if(data['success']==true){
         this.pname=data['da']
         console.log('pnmesds'+data['da'])
       }
       else{
         alert('no data found')
       }
     },error=>{
        alert('server error occurred')
     })
   }

   getpname(data){
     console.log('cc'+data)
     this.dataService.getbyname(data).subscribe((data):any=>{
       if(data['success']==true){
        //  console.log('ss'+JSON.stringify(data['da']))
        //  const x=JSON.stringify(data['da']);
        //  console.log('df'+x[0])
         this.cprod=data['da'];
        //  this.cname=x[pname];
        //  this.cdesc=data['da']['pdesc'];
        //  this.cprice=data['da']['price'];
         console.log(this.cprod)
       }
       else{
         alert('no data found')
       }
     },error=>{
       alert('server error occured')
     })
   }
 }
