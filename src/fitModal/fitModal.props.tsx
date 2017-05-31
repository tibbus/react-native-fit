import { ModalProperties, ViewStyle } from 'react-native';

export interface FitModalProps extends ModalProperties {
  content: React.ReactNode,
  style?: ViewStyle
}
