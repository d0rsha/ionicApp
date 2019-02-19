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
      // Checkout ReactiveForms course for more info on Validators 
    });
  }

  async signupUser() {
    const loading = await this.loadingCtrl.create({
      message: 'Signing up...'
    });
    loading.present();

    this.firebaseService.signup(this.loginForm.value.email, this.loginForm.value.password)
    .then(data => {
      console.log('Data: ', data);
    }, err => {
      console.log('Logged in details: ', this.loginForm.value.email, this.loginForm.value.password);
      loading.dismiss();
      this.showBasicAlert('SignUp Error', err.message);
    });
  }

  async loginUser() {
    const loading = await this.loadingCtrl.create({
      message: 'Signing up...'
    });
    loading.present();

    this.fbAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
    .then(data => {
      console.log('Data: ', data);
    }, err => {
      console.log('Logged in details: ', this.loginForm.value.email, this.loginForm.value.password);
      loading.dismiss();
      this.showBasicAlert('SignUp Error', err.message);
    });
  }

  forgotPw() {
    this.fbAuth.auth.sendPasswordResetEmail(this.loginForm.value.email)
    .then(() => {
      this.showBasicAlert('Success', 'Check your email');
    }).catch(err => {
      this.showBasicAlert('Error', err.message);
    });
  }

  async showBasicAlert(title, text) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: text,
      buttons: ['OK']
    });

    alert.present();
    // alert.then(alert => alert.present());
  }

}
