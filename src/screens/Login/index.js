import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../../utilities/constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Typography} from '../../utilities/constants/constant.style';
import AppStatusBar from '../../components/AppStatusBar';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import {Eye, EyeOff, Cross} from '../../assets/svg';
import PopUp from '../../components/PopUp';
import {t} from 'i18next';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email(t('invalid_email')).required(t('email_required')),
  password: Yup.string()
    .min(6, t('password_min_length'))
    .required(t('password_required')),
});

export default function Login({navigation}) {
  const [securePassword, setSecurePassword] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <AppStatusBar />
        {/* when login fail */}
        {/* <PopUp
        icon={<Cross />}
        title={t('something_went_wrong')}
        description={t('login_fail_msg')}
        iconPress={() => navigation.navigate('Login')}
        onButtonPress={() => navigation.navigate('Login')}
      /> */}
        <View style={styles.formContainer}>
          <Text style={styles.f_24_inter_bold}>{t('login')}</Text>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log('Login Data', values);
            }}>
            {({values, handleChange, handleSubmit, errors, touched}) => (
              <>
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
                  title={t('login')}
                  btnColor={Colors.primary}
                  btnTitleColor={Colors.white}
                  style={{marginTop: 40}}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
          <Text
            onPress={() => navigation.navigate('ForgotPassword')}
            style={styles.footerText}>
            {t('forget_password')}
          </Text>
          <Text
            onPress={() => navigation.navigate('Register')}
            style={[Typography.f_16_inter_regular, styles.footerText]}>
            {t('dont_have_an_account')}{' '}
            <Text
              style={[
                Typography.f_16_inter_extra_bold_italic,
                {color: Colors.primary},
              ]}>
              {t('register')}
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
