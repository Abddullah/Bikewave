import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppStatusBar from '../../components/AppStatusBar';
import {
  All,
  Electrical,
  Filter,
  Gravel,
  Mountain,
  Road,
  Search,
  City,
} from '../../assets/svg';
import {t} from 'i18next';
import {Typography} from '../../utilities/constants/constant.style';
import Colors from '../../utilities/constants/colors';
import DropShadow from 'react-native-drop-shadow';
import {DEFAULT_LANGUAGE} from '../../utilities';
import ProductCard from '../../components/ProductCard';
import Images from '../../assets/images';

const categories = [
  {id: 1, icon: All, label: {en: 'All', sp: 'Todos'}, color: Colors.black},
  {
    id: 2,
    icon: Road,
    label: {en: 'Road', sp: 'Carretera'},
    color: Colors.gray,
  },
  {
    id: 3,
    icon: City,
    label: {en: 'City', sp: 'Ciudad'},
    color: Colors.gray,
  },
  {
    id: 4,
    icon: Mountain,
    label: {en: 'Mountain', sp: 'Montaña'},
    color: Colors.gray,
  },
  {
    id: 5,
    icon: Gravel,
    label: {en: 'Gravel', sp: 'Gravel'},
    color: Colors.gray,
  },
  {
    id: 6,
    icon: Electrical,
    label: {en: 'Electrical', sp: 'Electrica'},
    color: Colors.gray,
  },
];

const products = [
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

const renderProductsList = () => (
  <View style={styles.productListWrapper}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {products.map((item, index) => (
        <ProductCard
          style={{marginBottom: index === products.length - 1 ? 210 : 0}}
          key={item.id}
          brand={item.brand[DEFAULT_LANGUAGE]}
          model={item.model[DEFAULT_LANGUAGE]}
          location={item.location}
          price={item.price}
          rating={item.rating}
          image={item.image}
        />
      ))}
    </ScrollView>
  </View>
);

export default function Home() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppStatusBar />
      <View style={styles.headerWrapper}>
        <DropShadow style={styles.shadowEffect}>
          <View style={styles.searchBox}>
            <Search />
            <View>
              <Text style={[Typography.f_18_roboto_medium, styles.cityLabel]}>
                {t('your_city')}
              </Text>
              <Text style={[Typography.f_14_roboto_medium, styles.dateLabel]}>
                {t('dates')}
              </Text>
            </View>
          </View>
        </DropShadow>
        <TouchableOpacity activeOpacity={0.8}>
          <Filter />
        </TouchableOpacity>
      </View>
      <DropShadow style={styles.categoryShadow}>
        <View style={styles.categoryWrapper}>
          <FlatList
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              const Icon = item.icon;
              return (
                <View style={styles.categoryItem}>
                  <Icon />
                  <Text
                    style={[Typography.f_12_inter_medium, {color: item.color}]}>
                    {item.label[DEFAULT_LANGUAGE]}
                  </Text>
                </View>
              );
            }}
            contentContainerStyle={styles.categoryList}
          />
        </View>
      </DropShadow>
      {renderProductsList()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  shadowEffect: {
    shadowColor: Colors.gray,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    width: '83%',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.white,
    borderRadius: 50,
    padding: 10,
  },
  cityLabel: {
    color: Colors.black,
  },
  dateLabel: {
    color: Colors.primary,
  },
  categoryList: {
    marginVertical: 10,
    paddingHorizontal: 20,
    gap: 20,
  },
  categoryWrapper: {
    backgroundColor: Colors.white,
  },
  categoryItem: {
    gap: 5,
    alignItems: 'center',
  },
  productListWrapper: {
    backgroundColor: Colors.white,
    marginTop: 10,
  },
  categoryShadow: {
    shadowColor: Colors.gray,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: 15},
  },
});
