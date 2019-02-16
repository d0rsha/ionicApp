# Ionic mobile apps

To run download the repo and run
```
ionic serve

## Add '-c' for making it visible on local network 
##     '-l' for lab environment in browser
```
To run on local android device (you also need android-sdk)
```
adb tcpip 5555                  
adb connect device_ip_address   
ionic cordova run android       ## Add '-l' for live reload (It's veeery niice)
```
Further to debug with chrome tools open [chrome://inspect/#devices](chrome://inspect/#devices)  
Make sure your device is connected, read more at https://ionic.zone/debug/remote-debug-your-app#android  
Make sure your device is running the same chrome version as your environment https://www.google.com/linuxrepositories/  
Find `Ionic App <device_ip>:<port> inspect` and hit `inspect`  

To emulate `ionic cordova emulate [<platform>] [options]`  (https://ionicframework.com/docs/cli/commands/cordova-emulate)
Check virtuals devices w/ `android list avd`

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

--- Clicky links ---  
https://ionicframework.com/docs/developer-resources/guides/first-app-v4/intro  
https://angularfirebase.com/  
https://angular.io/guide/router  
https://ionicons.com/  


