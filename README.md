![Spruce Logo](https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/header_image.png)

# React Native Spruce - iOS & Android

Spruce is a lightweight animation library that helps choreograph the animations on the screen. With so many different animation libraries out there, developers need to make sure that each view is animating at the appropriate time. Spruce can help designers request complex multi-view animations and not have the developers cringe at the prototype.

It provides a React Native Bridge around native spruce library. Here is a quick example of how you can Spruce up your screens!

![Example](https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif)

Before we dive into on how to use this library. We would like to thank all the contributor of [willowtreeapps/spruce-android](https://github.com/willowtreeapps/spruce-android) & [willowtreeapps/spruce-ios](https://github.com/willowtreeapps/spruce-ios) for providing such a awesome nice, cool library

> **Note**: Currently on iOS it is not supported due to unavailable of Spruce Objective-C wrappers, please refer issue: [101](https://github.com/willowtreeapps/spruce-ios/issues/101)

## Getting started

`$ npm install react-native-spruce --save`

`$ react-native link react-native-spruce`


## Usage
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



## Contributions
Any type of contribution will be very much appreciated

## License
Copyright @2017 Pranav Raj Singh Chauhan

The React Native Spruce is provided under the MIT License.