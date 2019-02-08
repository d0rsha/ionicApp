# Ionic mobile apps

To run download the repo and run
```
ionic serve

## Add '-c' for making it visible on local network 
##     '-l' for lab environment in browser
```
To run on local android device
```
adb tcpip 5555                  ## Skip if starting from virtual device 
adb connect device_ip_address   ## Check virtuals devices w/ 'android list avd'
ionic cordova run android
```


# How was it implemented?

### Camera plugin
```
npm install --save @ionic-native/camera@beta   
ionic cordova plugin add cordova-plugin-camera
ionic cordova platform add ios
ionic cordova platform add android 
ionic cordova platform add windows
```

### SQL storage
```
ionic g service services/Photo
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage
```
### Email functionality
```
ionic cordova plugin add cordova-plugin-email
npm install @ionic-native/email-composer@beta
```
### Login Screen
```
ionic g page public/login
ionic g page public/register
ionic g page members/dashboard
ionic g service services/authentication
ionic g service services/authGuard
ng generate module members/member-routing --flat
``` 

### Deprecated stuff v3 -> v4
<ion-nav>

https://ionicframework.com/docs/developer-resources/guides/first-app-v4/intro

