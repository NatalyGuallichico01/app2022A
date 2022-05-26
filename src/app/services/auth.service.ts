import { Injectable } from '@angular/core';
import {Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  async register({email, password}){
    try  {
const user=await createUserWithEmailAndPassword(
  this.auth,
  email,
  password
);
    }catch(e){
      return null;
    }
}
async login(){

}
}
