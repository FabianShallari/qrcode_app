# Qr Code Scanner

### Description
This is a simple app made in React Native which scans some pre-made QR Codes and triggers a navigation event automatically to a new screen

### Running the app (macOS)

#### Android

1. First make sure that adb is in your path:
  
   Open your terminal and type:

   `which adb`
  
   if the result is something like: 

   `/usr/local/bin/adb`

   then you are all set (skip to step 2), otherwise run the following command:

   `brew cask install android-platform-tools`

   run again to confirm adb is installed:

   `which adb`

   now it should show:

   `/usr/local/bin/adb`

2. To avoid dependencies mismatch make sure you are using node@8.10.0:

   ````
    // using nvm

    nvm install 8.10.0
    nvm use 8.10.0
   ````

3. Clone repository locally:
   
   ````
   git clone https://github.com/fabianshallari/qrcode_app /my_favorite_path/qrcode_app
   ````

4. Install and link node_modules 
   ````
   cd /my_favorite_path/qrcode_app
   yarn install
   react-native link react-native-camera 
   ````

5. Import the project on _Android Studio_:
   ````
   File -> Open -> my_favorite_path -> qrcode_app -> android
   ````
   After this step Android Studio might prompt you to install required dependencies such as SDK, and platform tools.

   Follow all instructions from the prompt until Gradle builds the project successfully.

   This should have also generated your `local.properties` file with a link to the Android SDK in your system

6. Open your favorite text editor and open the project
   ```` 
    // example with VsCode:
    code /my_favorite_path/qrcode_app
   ````

7. Connect your Android device with the computer and Enable Remote USB Debugging

8. Run the project:
   ````
   npm start
   react-native run-android
   ````

9. Enjoy
   
   Try some cats:

   ![cat qr](https://github.com/fabianshallari/qrcode_app/raw/master/assets/qr/cats.png)

   Try some dogs:

   ![dog qr](https://github.com/fabianshallari/qrcode_app/raw/master/assets/qr/cats.png)

   Try an invalid QR code:

   ![invalid qr](https://github.com/fabianshallari/qrcode_app/raw/master/assets/qr/invalid.png)

   
