<h1 align="center">

<p align="center">
  <img src="https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/header_image.png" height="300" width="600" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-spruce"><img src="http://img.shields.io/npm/v/react-native-spruce.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-spruce/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-spruce#License"><img src="https://img.shields.io/npm/l/react-native-spruce.svg?style=flat" /></a>
</p>


    ReactNative Spruce - (Android & iOS): Deprecated

Due to time constraint, this library is deprecated and not maintained anymore, You can still use this library.

If this project has helped you out, please support us with a star 🌟
</h1>

Spruce is a lightweight animation library that helps choreograph the animations on the screen. With so many different animation libraries out there, developers need to make sure that each view is animating at the appropriate time. Spruce can help designers request complex multi-view animations and not have the developers cringe at the prototype.

It provides a React Native Bridge around native spruce library. Here is a quick example of how you can Spruce up your screens!

> **Note**: Currently on iOS it is not supported due to unavailable of Spruce Objective-C wrappers, please refer issue: [101](https://github.com/willowtreeapps/spruce-ios/issues/101)

<p align="center">
  <img src="https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif" />
</p>

## 📖 Getting started

`$ npm install react-native-spruce --save`

`$ react-native link react-native-spruce`

- **Android**

  - Please copy below snippet in your app `build.gradle` file:

```
buildscript {
    repositories {
        jcenter()
        google()
        ...
    }
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        google()
        ...
    }
}
```

> **Note**: Android SDK 27 > is supported

## 💻 Usage

```javascript
import {
  Spruce,
  CorneredSort,
  DefaultAnimations
} from "react-native-spruce";


// TODO: What to do with the module?

render () {
  let sortWith = new CorneredSort(100);
  let animateWith = DefaultAnimations.shrinkAnimator(1000)

  <Spruce sortWith={sortWith} animateWith={animateWith} animator={{ propertyName: "translationX", values: [5000, 0], duration: 800 }}>
    <View />
  </Spruce>
}

```

## Using a SortFunction
Luckily, RNSpruce comes with 8 `SortFunction` implementations with a wide open possibility to make more! Use the `SortFunction` to change the order in which views animate. Consider the following example:

```javascript
let sort = new LinearSort(/*interObjectDelay=*/100L, /*reversed=*/false, LinearSort.Direction.TOP_TO_BOTTOM);
```

To make sure that developers can use RNSpruce out of the box, we included about 8 stock `SortFunction` implementations. These are some of the main functions we use at WillowTree and are so excited to see what others come up with!

- `DefaultSort`
```javascript
let sort = new DefaultSort(/*interObjectDelay=*/100L);
```

- `LinearSort`
```javascript
let sort = new LinearSort(/*interObjectDelay=*/100L, /*reversed=*/false, LinearSort.Direction.TOP_TO_BOTTOM);
```

- `CorneredSort`
```javascript
let sort = new CorneredSort(/*interObjectDelay=*/100L, /*reversed=*/false, CorneredSort.Corner.TOP_LEFT);
```

- `RadialSort`
```javascript
let sort = new RadialSort(/*interObjectDelay=*/100L, /*reversed=*/false, RadialSort.Position.TOP_LEFT);
```

- `RandomSort`
```javascript
let sort = new RandomSort(/*interObjectDelay=*/100L);
```

- `InlineSort`
```javascript
let sort = new InlineSort(/*interObjectDelay=*/100L, /*reversed=*/false, LinearSort.Direction.TOP_TO_BOTTOM);
```

- `ContinousSort`
```javascript
let sort = new ContinousSort(/*interObjectDelay=*/100L, /*reversed=*/false, ContinousSort.Position.TOP_LEFT);
```

## Stock Animators

To make everybody's lives easier, the stock animators perform basic View animations that a lot of apps use today. Mix and match these animators to get the core motion you are looking for.

- `DefaultAnimations.growAnimator(duration:number)`
- `DefaultAnimations.shrinkAnimator(duration:number)`
- `DefaultAnimations.fadeAwayAnimator(duration:number)`
- `DefaultAnimations.fadeInAnimator(duration:number)`
- `DefaultAnimations.spinAnimator(duration:number)`


Experiment which ones work for you! If you think of anymore feel free to add them to the library yourself!


## ✨ Credits

- [willowtreeapps/spruce-android](https://github.com/willowtreeapps/spruce-android)
- [willowtreeapps/spruce-ios](https://github.com/willowtreeapps/spruce-ios)

## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-spruce/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache 2 License.

RNSpruce @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >
