import React, {useEffect} from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import Images from '../../assets/images/index';
import {Logo} from '../../assets/svg/index';
import Colors from '../../utilities/constants/colors';

export default function Splash({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Register');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={Images.splashBg}>
      <View style={styles.overlay}>
        <Logo />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
});
