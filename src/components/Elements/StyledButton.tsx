import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StyledButtonProps} from '../types/Elements/StyledButtonProps';
import RenderImage from './RenderImage';
import {BaseStyles} from '../../assets/styles/BaseStyles';
const StyledButton = ({title, color, outlined, icon}: StyledButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={[
          styles.baseButtonStyle,
          {backgroundColor: !outlined ? color ?? '#3FA796' : 'transparent'},
          outlined
            ? {
                borderWidth: 1,
                borderColor: '#EAEAEA',
              }
            : {},
        ]}>
        {icon ? (
          <View style={BaseStyles.flexRowContainer}>
            <RenderImage src={icon} />
            <Text
              style={
                outlined
                  ? styles.textOutlinedButtonStyle
                  : styles.textButtonStyle
              }>
              {title}
            </Text>
          </View>
        ) : (
          <Text
            style={
              outlined ? styles.textOutlinedButtonStyle : styles.textButtonStyle
            }>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  baseButtonStyle: {
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  textButtonStyle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  textOutlinedButtonStyle: {
    color: '#7D7D7D',
    fontSize: 14,
  },
});
