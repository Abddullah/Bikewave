import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Cross, Eye, EyeOff, Tick} from '../../assets/svg';
import {t} from 'i18next';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Colors from '../../utilities/constants/colors';
import {Typography} from '../../utilities/constants/constant.style';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import AppStatusBar from '../../components/AppStatusBar';
import PopUp from '../../components/PopUp';

const validationSchema = Yup.object({
  firstName: Yup.string().required(t('first_name_required')),
  lastName: Yup.string().required(t('last_name_required')),
  email: Yup.string().email(t('invalid_email')).required(t('email_required')),
  password: Yup.string()
    .min(6, t('password_min_length'))
    .required(t('password_required')),
});

export default function Register({navigation}) {
  const [securePassword, setSecurePassword] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <AppStatusBar />
        {/* when register successfull */}
        {/* <PopUp
          icon={<Tick />}
          title={t('successful_registration')}
          description={t('register_success_msg')}
          iconPress={() => navigation.navigate('Register')}
          onButtonPress={() => navigation.navigate('Register')}
        /> */}
        {/* when register fail */}
        {/* <PopUp
          icon={<Cross />}
          title={t('something_went_wrong')}
          description={t('register_fail_msg')}
          iconPress={() => navigation.navigate('Register')}
          onButtonPress={() => navigation.navigate('Register')}
        /> */}
        <View style={styles.formContainer}>
          <Text style={styles.f_24_inter_bold}>{t('create_your_account')}</Text>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log('Form data', values);
            }}>
            {({values, handleChange, handleSubmit, errors, touched}) => (
              <>
                <AppTextInput
                  placeholder={t('first_name')}
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                />
                {touched.firstName && errors.firstName && (
                  <Text style={styles.errorText}>{errors.firstName}</Text>
                )}
                <AppTextInput
                  placeholder={t('last_name')}
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                />
                {touched.lastName && errors.lastName && (
                  <Text style={styles.errorText}>{errors.lastName}</Text>
                )}
                <AppTextInput
                  placeholder={t('email')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <AppTextInput
                  placeholder={t('password')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={securePassword}
                  icon={securePassword ? <EyeOff /> : <Eye />}
                  iconPress={() => setSecurePassword(!securePassword)}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <AppButton
                  title={t('register')}
                  btnColor={Colors.primary}
                  btnTitleColor={Colors.white}
                  onPress={handleSubmit}
                  style={{marginTop: 40}}
                />
              </>
            )}
          </Formik>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={[Typography.f_16_inter_regular, styles.footerText]}>
            {t('already_have_an_account')}{' '}
            <Text
              style={[
                Typography.f_16_inter_extra_bold_italic,
                {color: Colors.primary},
              ]}>
              {t('login')}
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  formContainer: {
    paddingHorizontal: 15,
    paddingTop: 70,
  },
  f_24_inter_bold: {
    ...Typography.f_24_inter_bold,
    color: Colors.black,
    marginBottom: 20,
  },
  footerText: {
    color: Colors.black,
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: Colors.error,
    ...Typography.f_16_inter_regular,
    marginTop: 5,
    marginLeft: 15,
  },
});
