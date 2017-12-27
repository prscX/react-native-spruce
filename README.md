![Spruce Logo](https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/header_image.png)

# React Native Spruce - iOS & Android

Spruce is a lightweight animation library that helps choreograph the animations on the screen. With so many different animation libraries out there, developers need to make sure that each view is animating at the appropriate time. Spruce can help designers request complex multi-view animations and not have the developers cringe at the prototype.

It provides a React Native Bridge around native spruce library. Here is a quick example of how you can Spruce up your screens!

![Example](https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif)


> **Note**: Currently it is supported only on Android Platform

## Getting started

`$ npm install react-native-spruce --save`

### Mostly automatic installation

`$ react-native link react-native-spruce`


## Usage
```javascript
import {
  Spruce,
  DefaultSort,
  RandomSort,
  CorneredSort,
  LinearSort,
  RadialSort,
  DefaultAnimations
} from "react-native-spruce";


// TODO: What to do with the module?

let spruceBuilder = new Spruce.SpruceBuilder(this.ref);

let defaultSort = new CorneredSort(100);
let defaultAnimations = DefaultAnimations.shrinkAnimator(800);

spruceBuilder.sortWith(defaultSort)
spruceBuilder.animateWith(defaultAnimations);

spruceBuilder.start();

```

