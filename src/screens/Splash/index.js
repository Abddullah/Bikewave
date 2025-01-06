import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Image, ImageBackground, View, Touchable, } from 'react-native';
import { _retrieveData } from '../../services/assynsStorage';
import Images from '../../assets/images/index'
import { Logo } from '../../assets/icons/index'
import { getCurrentUser, } from '../../store/actions/action'
import { Button } from 'native-base';

export default function Splash({ navigation }) {
  const dispatch = useDispatch()

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={Images.splashBg}
    >
      <View style={styles.overlay}>
        {/* <Image
          resizeMode="contain"
          style={{ width: 100, height: 100 }}
          source={Images.Logo}
        /> */}
        <Logo />
      </View>

      <Button style={{ marginTop: 20 }} onPress={() => navigation.navigate('Tabs')}>
        Show Bottom Navigation
      </Button>

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
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
});
