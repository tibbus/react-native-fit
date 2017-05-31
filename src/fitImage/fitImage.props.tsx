import { ImageProperties, ImageURISource } from 'react-native';

export interface FitImageProps extends ImageProperties {
  source: ImageURISource,
  round?: boolean,
  cache?: boolean
}
