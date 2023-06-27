import React from 'react';
import {View, Image} from 'react-native';
import {RenderImageProps} from '../types/Elements/RenderImageProps';

const RenderImage = ({src, imageStyle, containerStyle}: RenderImageProps) => {
  return (
    <View style={containerStyle}>
      <Image style={imageStyle} source={src} />
    </View>
  );
};

export default RenderImage;
