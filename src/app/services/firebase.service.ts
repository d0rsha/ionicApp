import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fbAuth: AngularFireAuth) { }

  signup(email, password) {
    return this.fbAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
