import {StyleSheet} from 'react-native';

const fonts = StyleSheet.create({
  regular: {
    fontFamily: 'SFProText-Regular',
  },
  semiBold: {
    fontFamily: 'SFProText-SemiBold',
  },
  bold: {
    fontFamily: 'SFProText-Bold',
  },
  H1: {
    fontFamily: 'SFProText-Regular',
    fontSize: 40,
  },
  P: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
  },
});

export const {H1, P} = fonts;
