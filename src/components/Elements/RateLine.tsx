import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RenderImage from './RenderImage';
import {BaseStyles} from '../../assets/styles/BaseStyles';
import {RateLineProps} from '../types/Elements/RateLineProps';
const fullStar = require('../../assets/icons/full_star.png');
const RateLine = ({values}: RateLineProps) => {
  const totalRateCount = values.reduce((a, b) => a + b, 0);
  return (
    <View
      style={[
        BaseStyles.flexColumnContainer,
        {flexDirection: 'column-reverse'},
      ]}>
      {[...Array(5)].map((_, index) => (
        <View
          style={[
            BaseStyles.flexRowContainer,
            {
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row-reverse',
            },
          ]}>
          <View
            style={[
              BaseStyles.flexRowContainer,
              {flexDirection: 'row-reverse', flexBasis: '12%'},
            ]}>
            <Text style={styles.textStyle}>{index + 1}</Text>
            <View
              style={[BaseStyles.flexRowContainer, {justifyContent: 'center'}]}>
              <RenderImage src={fullStar} />
            </View>
          </View>
          <View style={{flexBasis: '76%', height: 14}}>
            <View
              style={{
                width: '100%',
                position: 'relative',
              }}>
              <View style={styles.outlinedLine}></View>
              <View
                style={[
                  styles.filledLine,
                  {width: `${(values[index] * 100) / totalRateCount}%`},
                ]}></View>
            </View>
          </View>
          <Text style={[styles.textStyle, {flexBasis: '12%'}]}>
            {values[index]}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default RateLine;

const styles = StyleSheet.create({
  outlinedLine: {
    height: 14,
    position: 'absolute',
    backgroundColor: 'rgba(102, 102, 102, 0.20)',
    width: '100%',
    right: 0,
    top: 0,
    borderRadius: 100,
  },
  filledLine: {
    height: 14,
    position: 'absolute',
    backgroundColor: '#F9D342',
    right: 0,
    borderRadius: 500,
  },
  textStyle: {
    color: '#222529',
    fontSize: 16,
    fontFamily: 'Inter',
    textAlign: 'center',
  },
});
