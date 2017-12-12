# react-native-cryptocurrency-updates-app

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.
install  react-native-cli

Clone the repo
```sh
git clone https://github.com/himeshsuthar/react-native-cryptocurrency-updates-app.git
$ cd react-native-cryptocurrency-updates-app
$ npm install
$ react-natice run-android
```

In case you get errors
-
1) unable to find assets or index.android.js or unable to find bundles
    run following commands
    ```sh
    mkdir android/app/src/main/assets
    
    react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
    
    react-native run-android
    ```
    
2) Incase you get error like watchman stopped working or errors related to watchman
   
    ```sh
    echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
    echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
    echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
    watchman shutdown-server
    ```
    
    Happy Coding 
