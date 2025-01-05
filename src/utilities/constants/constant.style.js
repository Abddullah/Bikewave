import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import screenResolution from './screenResolution';
import Colors from './colors';

export const Typography = StyleSheet.create({
  heading_1: {
    fontSize: RFValue(20, screenResolution.screenHeight),
    fontWeight: 'bold',
  },
  heading_2: {
    fontSize: RFValue(18, screenResolution.screenHeight),
    fontWeight: 'bold',
  },
  heading_3: {
    fontSize: RFValue(16, screenResolution.screenHeight),
    fontWeight: 'bold',
  },
  paragraph_1: {
    fontSize: RFValue(14, screenResolution.screenHeight),
  },
  paragraph_2: {
    fontSize: RFValue(12, screenResolution.screenHeight),
    fontWeight: 'bold',
  },
  paragraph_3: {
    fontSize: RFValue(10, screenResolution.screenHeight),
    fontWeight: 'bold',
  },
});
