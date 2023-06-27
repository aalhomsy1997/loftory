import {StyleProp, ViewStyle, ImageStyle} from 'react-native';

export interface RenderImageProps {
  src: any;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
