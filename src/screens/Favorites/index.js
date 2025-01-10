import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {t} from 'i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppStatusBar from '../../components/AppStatusBar';
import Colors from '../../utilities/constants/colors';
import {Empty} from '../../assets/svg';
import {Typography} from '../../utilities/constants/constant.style';
import AppButton from '../../components/AppButton';
import Images from '../../assets/images';
import {DEFAULT_LANGUAGE} from '../../utilities';
import ProductCard from '../../components/ProductCard';

export default function Favorites({navigation}) {
  const favorites = [
    {
      id: 1,
      brand: {
        en: 'Mountain Bike Pro',
        sp: 'Bicicleta de Montaña Pro',
      },
      model: {
        en: 'Explorer X1',
        sp: 'Explorador X1',
      },
      location: 'Madrid',
      price: '50',
      rating: 4.8,
      image: Images.bicycle,
    },
    {
      id: 2,
      brand: {
        en: 'City Rider',
        sp: 'Ciclista Urbano',
      },
      model: {
        en: 'Street Master 2000',
        sp: 'Maestro Callejero 2000',
      },
      location: 'Madrid',
      price: '45',
      rating: 4.5,
      image: Images.bicycle,
    },
  ];

  const renderEmptyState = () => (
    <View style={styles.emptyStateContainer}>
      <View style={styles.emptyStateContent}>
        <View style={styles.emptyStateIconWrapper}>
          <Empty />
        </View>
        <Text style={styles.emptyStateTitle}>{t('no_favorites_title')}</Text>
        <Text style={styles.emptyStateMessage}>
          {t('no_favorites_message')}
        </Text>
      </View>
      <AppButton
        title={t('back_to_home')}
        btnColor={Colors.black}
        btnTitleColor={Colors.white}
        onPress={() => navigation.navigate('Home')}
        style={styles.backToHomeButton}
      />
    </View>
  );

  const renderFavoritesList = () => (
    <View style={styles.favoritesListContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.favoritesListTitle}>
          {t('favorites_list_title')}
        </Text>
        <View style={styles.favoritesListWrapper}>
          {favorites.map((item, index) => (
            <ProductCard
              style={{marginBottom: index === favorites.length - 1 ? 120 : 0}}
              key={item.id}
              brand={item.brand[DEFAULT_LANGUAGE]}
              model={item.model[DEFAULT_LANGUAGE]}
              location={item.location}
              price={item.price}
              rating={item.rating}
              image={item.image}
              onFavouritePress={() =>
                console.log(`Toggled favourite for ${item.id}`)
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaBackground}>
      <AppStatusBar />
      {favorites.length > 0 ? renderFavoritesList() : renderEmptyState()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaBackground: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  emptyStateContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.primary,
  },
  emptyStateContent: {
    flex: 2,
    justifyContent: 'center',
  },
  emptyStateIconWrapper: {
    alignSelf: 'center',
  },
  emptyStateTitle: {
    ...Typography.f_24_inter_bold,
    color: Colors.white,
    marginVertical: 20,
  },
  emptyStateMessage: {
    ...Typography.f_16_inter_regular,
    color: Colors.white,
    lineHeight: 23,
  },
  backToHomeButton: {
    marginBottom: 20,
  },
  favoritesListContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  favoritesListTitle: {
    ...Typography.f_20_inter_semi_bold,
    color: Colors.white,
    backgroundColor: Colors.primary,
    textAlign: 'center',
    paddingHorizontal: 75,
    paddingTop: 40,
    paddingBottom: 70,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    width: '100%',
  },
  favoritesListWrapper: {
    top: 115,
  },
});
