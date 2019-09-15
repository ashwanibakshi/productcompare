import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpSevice:HttpClient) { }

 adduser(a){
   alert('add')
   return this.httpSevice.post('http://localhost:3000/api/user/add',a);
 }

 login(a){
    return this.httpSevice.post('http://localhost:3000/api/user/authenticate',a)
 }
 
 addproduct(a) {
   var x=this.loadToken()
     var header=new HttpHeaders({'authorization':x})
    return this.httpSevice.post('http://localhost:3000/api/products/add',a,{headers:header})
 }
 
 getproduct(){
  return this.httpSevice.get('http://localhost:3000/api/products/getproduct')
 }

 getproductdetails(a){
  return this.httpSevice.get('http://localhost:3000/api/products/getproduct/'+a)
 }
 
 getpname(a){
  return this.httpSevice.post('http://localhost:3000/api/products/pname',a)
 }

 getbyname(a){
  return this.httpSevice.get('http://localhost:3000/api/products/byname/'+a)
 }

 storeUserData(token, user) {
  localStorage.setItem('id_token',token);
  localStorage.setItem('user', JSON.stringify(user));
  //this.authToken = token;
  //this.user = user;
}

loadToken() {
   var token = localStorage.getItem('id_token');
   return token;
}

loggedIn() {
return tokenNotExpired('id_token');
}

logout() {
  localStorage.clear();
}

}
