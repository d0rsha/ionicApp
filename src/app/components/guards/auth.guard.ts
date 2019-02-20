import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private fbAuth: AngularFireAuth) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // Check if user exist
      if (this.fbAuth.auth.currentUser) {
        console.log('<auth.guard.ts> ALLOW route');
        return true;
      } else {
        console.log('<auth.guard.ts> DENY route');
        return false;
      }
  }
}
