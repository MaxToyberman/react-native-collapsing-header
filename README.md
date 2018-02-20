
# react-native-collapsing-header

## Getting started

`$ npm install react-native-collapsing-header --save`

### Mostly automatic installation

`$ react-native link react-native-collapsing-header`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-collapsing-header` and add `RNCollapsingHeader.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCollapsingHeader.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNCollapsingHeaderPackage;` to the imports at the top of the file
  - Add `new RNCollapsingHeaderPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-collapsing-header'
  	project(':react-native-collapsing-header').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-collapsing-header/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-collapsing-header')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNCollapsingHeader.sln` in `node_modules/react-native-collapsing-header/windows/RNCollapsingHeader.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Collapsing.Header.RNCollapsingHeader;` to the usings at the top of the file
  - Add `new RNCollapsingHeaderPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNCollapsingHeader from 'react-native-collapsing-header';

// TODO: What to do with the module?
RNCollapsingHeader;
```
  