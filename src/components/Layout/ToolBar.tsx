import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {ToolBarProps} from '../types/Layout/ToolBarProps';
import RenderImage from '../Elements/RenderImage';
import {BaseStyles} from '../../assets/styles/BaseStyles';
import DeviceInfo from 'react-native-device-info';
const Logo = require('../../assets/images/logo.png');
const CartIcon = require('../../assets/icons/add_to_cart.png');
const ChevronDown = require('../../assets/icons/chevron-down.png');

const ToolBar = ({}: ToolBarProps) => {
  console.log('DeviceInfo', DeviceInfo.hasNotch());
  return (
    <View style={[styles.toolBar]}>
      <Image source={Logo} />
      <View style={[styles.iconContainer]}>
        <View style={[BaseStyles.flexRowContainer, {alignItems: 'center'}]}>
          <Text style={styles.languageStyle}>EN</Text>
          <RenderImage src={ChevronDown} />
        </View>
        <RenderImage src={CartIcon} containerStyle={{marginHorizontal: 12}} />
      </View>
    </View>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  toolBar: {
    height: !DeviceInfo.hasNotch() ? 76 : 124,
    backgroundColor: '#100F0F',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageStyle: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
});
