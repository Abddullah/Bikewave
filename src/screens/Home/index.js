import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {_retrieveData} from '../../services/assynsStorage';
import {t} from 'i18next';
import {getCurrentUser} from '../../store/actions/action';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.background}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
