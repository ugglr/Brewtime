import React, {useRef} from 'react';
import {StyleSheet, Dimensions, Animated} from 'react-native';

import Slide from './components/Slide';

import * as colors from '../colors';
import {getTranslations, AvailableLocales} from '../locale';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width,
  },
  controlContainer: {},
  leftButtonContainer: {},
});

const {onboardingTranslations} = getTranslations(AvailableLocales.en);

const slides = [
  {
    title: onboardingTranslations.slide1.title,
    body: onboardingTranslations.slide1.body,
    buttonText: onboardingTranslations.slide1.buttonText,
    backgroundColor: colors.offWhite,
    lottie: require('../assets/lotties/coffee-time-2.json'),
  },
  {
    title: onboardingTranslations.slide2.title,
    body: onboardingTranslations.slide2.body,
    buttonText: onboardingTranslations.slide2.buttonText,
    backgroundColor: colors.brown,
    isDark: true,
  },
  {
    title: onboardingTranslations.slide3.title,
    body: onboardingTranslations.slide3.body,
    buttonText: onboardingTranslations.slide3.buttonText,
    backgroundColor: colors.whiteShadow,
  },
];

const Onboarding = ({navigation}) => {
  const x = useRef(new Animated.Value(0)).current;
  const scrollview = useRef<any>(null);

  const animatedBackground = x.interpolate({
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.backgroundColor),
  });

  const scroll = (index: number, direction: 'forwards' | 'backwards') => {
    if (scrollview.current) {
      scrollview.current.scrollTo({
        x: width * (direction === 'forwards' ? index + 1 : index - 1),
        animated: true,
      });
    }
  };

  return (
    <Animated.View
      style={[styles.container, {backgroundColor: animatedBackground}]}>
      <Animated.ScrollView
        ref={scrollview}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x}}}], {
          useNativeDriver: false,
        })}>
        {slides.map(({title, body, buttonText, lottie, isDark}, index) => (
          <Slide
            key={index}
            isLast={index === slides.length - 1}
            onPress={() => scroll(index, 'forwards')}
            onBackPress={() => scroll(index, 'backwards')}
            onClosePress={() => navigation.navigate('login')}
            lastOnPress={() => navigation.navigate('signUp')}
            {...{title, body, index, buttonText, lottie, isDark}}
          />
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default Onboarding;
