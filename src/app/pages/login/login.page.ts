import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../../services/firebase.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private fbAuth: AngularFireAuth,
    private firebaseService: FirebaseService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['avrethem@gmail.com', Validators.compose([Validators.email, Validators.required])],
      password: ['123123', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  signupUser() {

  }

  loginUser() {

  }

  forgetPw() {

  }



}
