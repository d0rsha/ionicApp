# Ionic mobile apps

Get the latest verison of Node.js!!

Download the repo and run
```
(sudo) npm install -g ionic cordova 
npm install                     ## Inside the repo 
ionic serve                     ## Add '-c' for making it visible on local network 
                                ##     '-l' for lab environment in browser
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
ionic g page pages/films
ionic g page pages/films/details
ionic g page pages/tabs
ionic g module pages/tabs-router --flat
ionic g service services/omdbapi
``` 

### Deprecated stuff v3 -> v4
<ion-nav>
<ion-tab> In beta.18 ion-tab was removed https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md  


--- Clicky links ---  
https://ionicframework.com/docs/developer-resources/guides/first-app-v4/intro  
https://angularfirebase.com/  
https://angular.io/guide/router  
https://ionicons.com/  


