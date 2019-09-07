import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CompareComponent } from './components/compare/compare.component';
import { DashboardComponent } from './components/panel/dashboard/dashboard.component';
import { LoginComponent } from './components/panel/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
 {path:'home',children:
 [
   {path:'index',component:HomeComponent},
   {path:'product/details/:id',component:ProductComponent},
   {path:'product/compare/:id',component:CompareComponent}
  ] 
 },
 {path:'admin',children:[
   {path:'login',component:LoginComponent},
   {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard] }
 ]
},
 {path:'',redirectTo:'/home/index',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
