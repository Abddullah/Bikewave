import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import screenResolution from './screenResolution';

export const Typography = StyleSheet.create({
  f_12_roboto_medium: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(8, screenResolution.screenWidth),
  },
  f_18_roboto_medium: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(10, screenResolution.screenWidth),
  },
  f_14_roboto_medium: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(9, screenResolution.screenWidth),
  },
  f_24_inter_bold: {
    fontFamily: 'Inter_18pt-Bold',
    fontSize: RFValue(13, screenResolution.screenWidth),
  },
  f_20_inter_semi_bold: {
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: RFValue(10, screenResolution.screenWidth),
  },
  f_18_inter_semi_bold: {
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: RFValue(9, screenResolution.screenWidth),
  },
  f_14_inter_medium: {
    fontFamily: 'Inter_18pt-Medium',
    fontSize: RFValue(7, screenResolution.screenWidth),
  },
  f_16_inter_bold: {
    fontFamily: 'Inter_18pt-Bold',
    fontSize: RFValue(9, screenResolution.screenWidth),
  },
  f_16_inter_regular: {
    fontFamily: 'Inter_18pt-Regular',
    fontSize: RFValue(8, screenResolution.screenWidth),
  },
  f_16_inter_extra_bold_italic: {
    fontFamily: 'Inter_18pt-ExtraBoldItalic',
    fontSize: RFValue(8, screenResolution.screenWidth),
  },
  f_16_inter_medium: {
    fontFamily: 'Inter_18pt-Medium',
    fontSize: RFValue(8, screenResolution.screenWidth),
  },
  f_12_inter_medium: {
    fontFamily: 'Inter_18pt-Medium',
    fontSize: RFValue(6, screenResolution.screenWidth),
  }
});
