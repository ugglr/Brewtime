import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {MAIN_BG, BLACK} from './colors';

const {width, height} = Dimensions.get('screen');

export const ScreenContainer = styled.View`
  width: ${width};
  height: ${height};
  background-color: ${MAIN_BG};
  color: ${BLACK};
  justify-content: center;
  align-items: center;
`;
