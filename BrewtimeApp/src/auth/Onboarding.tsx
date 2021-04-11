import React, {useRef} from 'react';
import {View, StyleSheet, Text, Dimensions, Animated} from 'react-native';
import Slide from './Slide';

import * as colors from '../colors';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width,
  },
});

const slides = [
  {
    title: 'Welcome to Brewtime!',
    body: 'This is the body of slide 1',
    backgroundColor: colors.brown,
  },
  {
    title: 'Welcome to Brewtime!',
    body: 'This is the body of slide 2',
    backgroundColor: colors.sand,
  },
];

const Onboarding = () => {
  const x = useRef(new Animated.Value(0)).current;
  const scrollview = useRef<any>(null);

  const animatedBackground = x.interpolate({
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.backgroundColor),
  });

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
        {slides.map(({title, body}, index) => (
          <Slide
            key={index}
            isLast={index === slides.length - 1}
            onPress={() => {
              if (scrollview.current) {
                scrollview.current.scrollTo({
                  x: width * (index + 1),
                  animated: true,
                });
              }
            }}
            lastOnPress={() => console.log('hello')}
            {...{title, body, index}}
          />
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default Onboarding;
