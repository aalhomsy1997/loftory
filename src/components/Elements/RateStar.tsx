import React from 'react';
import {View} from 'react-native';
import RenderImage from './RenderImage';
import {RateStarProps} from '../types/Elements/RateStarProps';
import {BaseStyles} from '../../assets/styles/BaseStyles';
const fullStar = require('../../assets/icons/full_star.png');
const halfStar = require('../../assets/icons/half_star.png');
const emptyStar = require('../../assets/icons/empty_star.png');
const RateStar = ({value}: RateStarProps) => {
  return (
    <View style={BaseStyles.flexRowContainer}>
      {[...Array(5)].map((_, index) => {
        if (index + 1 <= value) {
          return (
            <RenderImage
              containerStyle={{paddingHorizontal: 2.5}}
              src={fullStar}
            />
          );
        } else if (
          index + 1 > value &&
          value > index &&
          !Number.isInteger(value)
        ) {
          return (
            <RenderImage
              containerStyle={{paddingHorizontal: 2.5}}
              src={halfStar}
            />
          );
        } else {
          return (
            <RenderImage
              containerStyle={{paddingHorizontal: 2.5}}
              src={emptyStar}
            />
          );
        }
      })}
    </View>
  );
};

export default RateStar;
