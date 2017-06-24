React Native responsive components.

## Introduction
Responsive Image, Video and Modal components that fits in dynamic containers.

![Example](https://github.com/tibbus/react-native-fit/blob/master/example/demo.gif)

## Install
`npm install react-native-fit --save`   
`yarn add react-native-fit`

Run to link the VIDEO library :   
react-native link   

## Usage

Supports all `Image` props +  FitImage ones  
```javascript
import FitImage from 'react-native-fit/fitImage';

render() {
  return <FitImage source={{uri: 'yourImagepath...'}}  // remote url or local path
    round={false}                                      // default false - make an image round/square
    style={ {} }                                       // supports any style, can add `width` and will generate the height to ratio
  />
}
```
  
Supports all `Video` props + FitVideo ones  
https://github.com/react-native-community/react-native-video
```javascript
import FitVideo from 'react-native-fit/fitVideo';

render() {
  return <FitVideo source={{uri: 'yourVideopath...'}}  // remote url or local path
    playable={true}                                    // default true - make video playable (useful when you want to open in a modal)
    playIcon={true}                                    // default true - show/hide play icon on video
    style={ {} }                                       // supports any style, can add `width` and will generate the height to ratio
  />
}
```
  
Supports all `Modal` props + FitModal ones  
https://facebook.github.io/react-native/docs/modal.html
```javascript
import FitModal from 'react-native-fit/fitModal';

render() {
  return (
    <FitModal content={<Text style={{color: 'white'}}>text conten</Text>}  // React Component to render inside fullscreen Modal
      style={ {} }                                                         // Style for the thumbnail that will open the Modal, Text in this case
    >
      <Text>open Modal</Text>
    </FitModal>
  );
}
```
  
Use fitModal with fitImage and fitVideo:
```javascript
import { FitModal, FitImage, FitVideo } from 'react-native-fit';

render() {
  return (
    <FitModal content={<FitVideo source={{uri: 'yourVideopath...'}} />}>
      <FitVideo playable={false} source={{uri: 'yourVideopath...'}} />
    </FitModal>

    <FitModal content={<FitImage source={{uri: 'yourImagepath...'}} />}>
      <FitImage source={{uri: 'yourImagepath...'}} />
    </FitModal>
  );
}
```
