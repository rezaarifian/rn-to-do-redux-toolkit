<!-- Title -->

<p align="center">
  <a href="https://github.com/expo/examples">
    <img alt="create-react-native-app" src="./.gh-assets/banner.svg">
    <h1 align="center">A simple Todo App using Redux Toolkit as state  management and Persisting data</h1>
  </a>
</p>

<!-- Header -->

<p align="center">
  <b>Alreaday running and tested on</b>
  <br />

  <p align="center">
    <!-- iOS -->
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-000.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
    <!-- Android -->
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-000.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </p>
  <p align="center">
    <a href="https://packagephobia.now.sh/result?p=create-react-native-app">
      <img alt="the best way to bootstrap a react native app" longdesc="the best way to create a react native app" src="https://flat.badgen.net/packagephobia/install/create-react-native-app" />
    </a>
  </p>
  
</p>

## Product Demo

<p align="center">
  <img align="center" alt="Product: demo" src="./.gh-assets/prd-demo.gif" />
</p>

    
## Built With

- React Native
- Functional component
- TypeScript
- Redux Toolkit
- Redux Persist
- React Native Svg
- React Native Reanimated
- Jest for Unit Test

## Architecture
Insipired by atomic architecture, separete component from the smallest.
atoms = TextInput, Text, View, ToachableOpacity, etc
molecules = component
pages = screen
model = interfaces
  
## Learning objectives
- React Native : Use framework and components
- Functional component : to use hooks and data modeling
- TypeScript : Type annotations and interfaces serve as implicit documentation, making it easier to understand what types are expected
- Redux Toolkit : as management state
- Redux Persist : for persisting data and integrate with Redux Toolkit
- React Native Svg : for handle assets
- React Native Reanimated : way to handle animations in your mobile applications, it's designed to work smoothly with the React Native framework
- Jest : for Unit Test


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Author 👤

- LinkedIn: [Reza Arifiansya](https://www.linkedin.com/in/reza-arifiansyah/)


## 📝 License

This project is [MIT](./MIT.md) licensed.
