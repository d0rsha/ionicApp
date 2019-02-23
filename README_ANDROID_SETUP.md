## Prerequisite
 * Java  
 * Gradle  https://gradle.org/install/  
 * Android studio OR android sdk-build-tools   

https://ionicframework.com/docs/installation/android  


Run `sudo find / -type d -name 'android'` and find  
`*/Android/Sdk/*`. Export it to bashrc or equivivalent.
```
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
# avdmanager, sdkmanager
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
# adb, logcat
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
# emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
# apksigner, zipalign
export PATH=$PATH:$ANDROID_SDK_ROOT/build-tools
```

For windows check OEM for you specific device 

To run on local android device
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
