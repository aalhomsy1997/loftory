import React from 'react';
import {Text, ScrollView, View, StyleSheet, Pressable} from 'react-native';
import StyledButton from '../Elements/StyledButton';
import {BaseStyles} from '../../assets/styles/BaseStyles';

const BottomBar = () => {
  return (
    <View style={styles.shadowWrapper}>
      <View
        style={[
          BaseStyles.flexRowContainer,
          styles.bottomBar,
          {flexDirection: 'row-reverse'},
        ]}>
        <View>
          <StyledButton title="أضف الى السلة" />
          <Pressable style={{paddingTop: 8}}>
            <Text style={{color: '#3FA796'}}>أطلب عن طريق واتساب</Text>
          </Pressable>
        </View>
        <View
          style={{
            shadowOffset: {width: -2, height: 4},
            shadowColor: '#000000',
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <Text style={{color: '#100F0F', fontSize: 20, fontWeight: '600'}}>
            $42,70
          </Text>
          <Text
            style={{
              color: '#C1CACA',
              fontSize: 16,
              fontWeight: '600',
              textDecorationLine: 'line-through',
            }}>
            $50,70
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 102,
    backgroundColor: '#ffffff',
    zIndex: 100,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#000000',
    elevation: 5, // For Android
    shadowColor: '#000000', // For iOS
    shadowOffset: {
      width: 0,
      height: 80,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  shadowWrapper: {
    elevation: 5, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
