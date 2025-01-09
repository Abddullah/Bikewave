import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import screenResolution from './screenResolution';

export const Typography = StyleSheet.create({
  footer_text: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(8, screenResolution.screenWidth),
  },
  heading: {
    fontFamily: 'Inter_18pt-Bold',
    fontSize: RFValue(15, screenResolution.screenWidth),
  },
  input_title: {
    fontFamily: 'Inter_18pt-Medium',
    fontSize: RFValue(8, screenResolution.screenWidth),
  },
  btn_text: {
    fontFamily: 'Inter_18pt-Bold',
    fontSize: RFValue(9, screenResolution.screenWidth),
  },
  small_text_normal: {
    fontFamily: 'Inter_18pt-Regular',
    fontSize: RFValue(8, screenResolution.screenWidth),
  },
  small_text_bold_Italic: {
    fontFamily: 'Inter_18pt-ExtraBoldItalic',
    fontSize: RFValue(8, screenResolution.screenWidth),
  },
});
