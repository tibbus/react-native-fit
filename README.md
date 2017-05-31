React Native responsive components.

## Introduction
Responsive Image, Video and Modal components that fits in dynamic containers.


![Example](https://github.com/tibbus/react-native-fit/blob/master/example/demo.gif)

## Install
`npm install react-native-fit --save` <br>
`yarn add react-native-fit`

## Usage
Dependencies :
https://github.com/kfiroo/react-native-cached-image AND <br>
https://github.com/react-native-community/react-native-video

Run to link the libraries : <br>
react-native link react-native-fetch-blob <br>
react-native link <br>

Note: You can disable FitImage cache by passing props `cache={false}`


FitImage is a wrapper of Image component from react-native:
```javascript
import FitImage from 'react-native-fit/fitImage';

render() {
  return <FitImage source={{uri: 'yourImagepath...'}} />
}
```

FitVideo is a wrapper of react-native-video:
```javascript
import FitVideo from 'react-native-fit/fitVideo';

render() {
  return <FitVideo source={{uri: 'yourVideopath...'}} />
}
```

FitModal is a wrapper of Modal component from react-native:
```javascript
import FitModal from 'react-native-fit/fitModal';

render() {
  return (
    <FitModal content={<Text style={{color: 'white'}}>text conten</Text>}>
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
