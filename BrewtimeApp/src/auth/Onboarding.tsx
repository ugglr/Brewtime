import React, {useRef} from 'react';
import {StyleSheet, Dimensions, Animated} from 'react-native';

import Slide from './Slide';

import * as colors from '../colors';
import {getLocale} from '../locale';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width,
  },
  controlContainer: {},
  leftButtonContainer: {},
});

const {onboarding} = getLocale('EN');

const slides = [
  {
    title: onboarding.slide1.title,
    body: onboarding.slide1.body,
    buttonText: onboarding.slide1.buttonText,
    backgroundColor: colors.offWhite,
  },
  {
    title: onboarding.slide2.title,
    body: onboarding.slide2.body,
    buttonText: onboarding.slide2.buttonText,
    backgroundColor: colors.offWhite,
  },
  {
    title: onboarding.slide3.title,
    body: onboarding.slide3.body,
    buttonText: onboarding.slide3.buttonText,
    backgroundColor: colors.whiteShadow,
  },
];

const Onboarding = () => {
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
        {slides.map(({title, body, buttonText}, index) => (
          <>
            <Slide
              key={index}
              isLast={index === slides.length - 1}
              onPress={() => scroll(index, 'forwards')}
              onBackPress={() => scroll(index, 'backwards')}
              lastOnPress={() => console.log('hello')}
              {...{title, body, index, buttonText}}
            />
          </>
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default Onboarding;