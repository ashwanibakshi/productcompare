import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgForm } from '@angular/forms';
import { DataService } from '../../../services/data.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
 editorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: '25rem',
  minHeight: '5rem',
  placeholder: 'Enter text here...',
  translate: 'no',
  uploadUrl: 'v1/images'
 };

   add(a:NgForm){
      console.log(a.controls['desc'].value +a.controls['pname'].value+a.controls['category'].value+a.controls['price'].value)
      const x={
        pname:a.controls['pname'].value,
        category:a.controls['category'].value,
        pdesc:a.controls['desc'].value,
        price:a.controls['price'].value
      }
      this.dataService.addproduct(x).subscribe((data):any=>{
        if(data['success']==true){
          alert('product added')
          a.resetForm();
        }
        else{
        alert('product not added')
        }
      },error=>{
        alert('server error occured')
      })
   }
}
