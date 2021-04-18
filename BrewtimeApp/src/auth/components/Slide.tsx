import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

import {AntIcon, Button} from '../../components/basic';

import * as colors from '../../colors';
import * as fonts from '../../fonts';
import * as responsive from '../../responsive';

const {width, height} = Dimensions.get('screen');

const LottieSize = width * 0.9;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width,
  },
  controlContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 28,
    position: 'absolute',
    left: 0,
    top: 32,
    width,
  },
  lottieContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 44,
    width,
    zIndex: -1,
  },
  lottie: {
    alignSelf: 'center',
    width: LottieSize,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  darkContent: {
    color: colors.whiteShadow,
  },
  bodyContainer: {
    width,
    paddingHorizontal: responsive.sideMargin.xl,
    top: -36,
  },
  body: {
    textAlign: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: height * 0.1,
  },
});

type SlideProps = {
  title: string;
  body: string;
  isLast: boolean;
  index: number;
  buttonText: string;
  lottie?: string;
  isDark?: boolean;
  onPress: () => void;
  onBackPress: () => void;
  lastOnPress: () => void;
  onClosePress: () => void;
};

const Slide = ({
  title,
  body,
  onPress,
  isLast,
  index,
  buttonText,
  lottie,
  isDark,
  onBackPress,
  lastOnPress,
  onClosePress,
}: SlideProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        {!isLast ? (
          <TouchableOpacity onPress={onClosePress}>
            <AntIcon
              name="close"
              size={16}
              color={isDark ? colors.white : colors.offBlack}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {index !== 0 && (
          <TouchableOpacity onPress={onBackPress}>
            <AntIcon
              name="left"
              size={16}
              color={isDark ? colors.white : colors.offBlack}
            />
          </TouchableOpacity>
        )}
      </View>
      {lottie ? (
        <View style={styles.lottieContainer}>
          <LottieView source={lottie} autoPlay loop style={styles.lottie} />
        </View>
      ) : (
        <View style={[styles.lottieContainer, {height: LottieSize}]} />
      )}
      <View style={styles.bodyContainer}>
        <Text style={[fonts.H1, styles.title, isDark && styles.darkContent]}>
          {title}
        </Text>
        <Text style={[fonts.P, styles.body, isDark && styles.darkContent]}>
          {body}
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          variant={isLast ? 'primary' : 'secondary'}
          label={buttonText}
          onPress={isLast ? lastOnPress : onPress}
        />
      </View>
    </View>
  );
};

export default Slide;
