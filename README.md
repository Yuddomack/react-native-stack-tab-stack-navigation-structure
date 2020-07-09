# react-native-stack-tab-stack-navigation-structure

a simple navigation structure for react native.<br>

1. Login
2. Tab Navigator
3. Setting(logout) -> Login

## Required

    * react-navigation

- refer to the [installation document](https://reactnavigation.org/docs/4.x/getting-started)
- check your react-native version (React Native 0.60 and higher / React Native 0.59 and lower)

## Structure

    src
    └── screens
        ├── HomeScreen
        ├── LoginScreen
        ├── SettingScreen
        ├── SomethingScreen
        └── index.js (AppContainer for react navigation)

### 1. Login -> Tab Navigator

<img src="https://github.com/Yuddomack/react-native-stack-tab-stack-navigation-structure/blob/master/img/login.png" width="33%"><img src="https://github.com/Yuddomack/react-native-stack-tab-stack-navigation-structure/blob/master/img/home.png" width="33%">

### 2. Tab Navigator

<img src="https://github.com/Yuddomack/react-native-stack-tab-stack-navigation-structure/blob/master/img/home.png" width="33%"><img src="https://github.com/Yuddomack/react-native-stack-tab-stack-navigation-structure/blob/master/img/setting.png" width="33%">

### 3. Stack Navigator in Tab Navigator

<img src="https://github.com/Yuddomack/react-native-stack-tab-stack-navigation-structure/blob/master/img/setting.png" width="33%"><img src="https://github.com/Yuddomack/react-native-stack-tab-stack-navigation-structure/blob/master/img/something.png" width="33%">

### 4. Tab Navigator -> Login

<img src="https://github.com/Yuddomack/react-native-stack-tab-stack-navigation-structure/blob/master/img/logout.png" width="33%"><img src="https://github.com/Yuddomack/react-native-stack-tab-stack-navigation-structure/blob/master/img/login.png" width="33%">
