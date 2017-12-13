
# react-native-spruce

## Getting started

`$ npm install react-native-spruce --save`

### Mostly automatic installation

`$ react-native link react-native-spruce`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-spruce` and add `RNSpruce.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSpruce.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNSprucePackage;` to the imports at the top of the file
  - Add `new RNSprucePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-spruce'
  	project(':react-native-spruce').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-spruce/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-spruce')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNSpruce.sln` in `node_modules/react-native-spruce/windows/RNSpruce.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Spruce.RNSpruce;` to the usings at the top of the file
  - Add `new RNSprucePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNSpruce from 'react-native-spruce';

// TODO: What to do with the module?
RNSpruce;
```
  