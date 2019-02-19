import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private fbAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  logout() {
    this.fbAuth.auth.signOut();
  }
}
