import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {Location, Star, FavouriteActive} from '../assets/svg';
import Colors from '../utilities/constants/colors';
import {Typography} from '../utilities/constants/constant.style';
import {t} from 'i18next';

const ProductCard = ({brand, model, location, price, rating, image, style}) => {
  return (
    <Shadow
      distance={5}
      style={[styles.cardShadow, style]}
      containerStyle={styles.cardContainer}>
      <Image source={image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.cardDetails}>
        <View style={styles.rowSpaceBetween}>
          <View style={styles.rowAligned}>
            <Text style={[Typography.f_18_inter_semi_bold, styles.text]}>
              Brand
            </Text>
            <Text style={[Typography.f_16_inter_regular, styles.text]}>
              {brand}
            </Text>
          </View>
          <Text
            style={[
              Typography.f_18_inter_semi_bold,
              styles.text,
            ]}>{`${price}€${t('per_day')}`}</Text>
        </View>
        <View style={styles.rowSpaceBetween}>
          <Text style={[Typography.f_16_inter_medium, styles.text]}>
            {model}
          </Text>
          <View style={styles.rowAligned}>
            <Location />
            <Text style={[Typography.f_16_inter_medium, styles.text]}>
              {location}
            </Text>
          </View>
        </View>
        <View style={styles.rowAligned}>
          <Star />
          <Text style={[Typography.f_12_inter_medium, styles.text]}>
            {rating}
          </Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.heartIconWrapper}>
        <FavouriteActive />
      </TouchableOpacity>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    backgroundColor: Colors.white,
    width: '100%',
    borderRadius: 10,
  },
  cardContainer: {
    margin: 15,
  },
  cardImage: {
    width: '100%',
    height: 320,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardDetails: {
    padding: 10,
    paddingBottom: 15,
    gap: 3,
  },
  text: {
    color: Colors.black,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowAligned: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  heartIconWrapper: {
    position: 'absolute',
    padding: 10,
    right: 0,
  },
});

export default ProductCard;
