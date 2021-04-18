import {StyleSheet} from 'react-native';
import * as colors from './colors';

const fonts = StyleSheet.create({
  regular: {
    color: colors.offBlack,
    fontFamily: 'SFProText-Regular',
  },
  semiBold: {
    fontFamily: 'SFProText-SemiBold',
  },
  bold: {
    fontFamily: 'SFProText-Bold',
  },
  H1: {
    color: colors.offBlack,
    fontFamily: 'SFProText-Regular',
    fontSize: 44,
  },
  H2: {
    color: colors.offBlack,
    fontFamily: 'SFProText-Regular',
    fontSize: 32,
  },
  H3: {
    color: colors.offBlack,
    fontFamily: 'SFProText-Regular',
    fontSize: 24,
  },
  P: {
    color: colors.offBlack,
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
  },
});

export const {regular, semiBold, bold, H1, H2, H3, P} = fonts;
