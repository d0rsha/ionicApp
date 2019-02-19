
```
ionic cordova build android --prod --release
## --prod compress apk, --release makes the app signable (so that it cvan be pousblished in marketplace)



## Only first time 
keytool -genkey -v -keystore calco-master-release-key.keystore -alias calco-master -keyalg RSA -keysize 2048 -validity 10000
cp calco-master-release-key.keystore platforms/android/app/build/outputs/apk/release/.
cd platforms/android/app/build/outputs/apk/release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore calco-master-release-key.keystore app-release-unsigned.apk calco-master

/home/d0rsha/Android/Sdk/build-tools/28.0.3/zipalign -v 4 app-release-unsigned.apk CalcoMaster.apk
```