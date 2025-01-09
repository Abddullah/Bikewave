import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Typography} from '../utilities/constants/constant.style';

const AppButton = ({title, onPress, style, btnColor, btnTitleColor}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: btnColor}, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[Typography.btn_text, {color: btnTitleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default AppButton;
