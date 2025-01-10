import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../../utilities/constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Typography} from '../../utilities/constants/constant.style';
import AppButton from '../../components/AppButton';
import AppStatusBar from '../../components/AppStatusBar';
import AppTextInput from '../../components/AppTextInput';
import PopUp from '../../components/PopUp';
import {Back, Tick} from '../../assets/svg';
import {t} from 'i18next';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.screenWrapper}>
        <AppStatusBar />
        {/* when forgot password successfull */}
        {/* <PopUp
          icon={<Tick />}
          title={t('mail_sent')}
          description={t('link_sent_msg')}
          iconPress={() => navigation.navigate('ForgotPassword')}
          onButtonPress={() => navigation.navigate('ForgotPassword')}
        /> */}
        <View style={styles.formWrapper}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Back />
          </TouchableOpacity>
          <Text style={[Typography.f_24_inter_bold, styles.title]}>
            {t('recover_password')}
          </Text>
          <Text style={[Typography.f_16_inter_regular, styles.infoText]}>
            {t('forget_password_msg')}
          </Text>
          <AppTextInput
            placeholder={t('your_email')}
            value={email}
            onChangeText={setEmail}
          />
          <AppTextInput
            placeholder={t('repeat_email')}
            value={confirmEmail}
            onChangeText={setConfirmEmail}
          />
          <AppButton
            title={t('send_reset_link')}
            btnColor={Colors.primary}
            btnTitleColor={Colors.white}
            style={styles.resetButton}
            onPress={() => navigation.navigate('ResetPassword')}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  formWrapper: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    color: Colors.black,
    marginBottom: 10,
    marginTop: 30,
  },
  infoText: {
    color: Colors.black,
    marginBottom: 20,
    lineHeight: 25,
  },
  resetButton: {
    marginTop: 40,
  },
});
