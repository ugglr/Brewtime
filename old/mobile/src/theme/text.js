import styled from 'styled-components/native';

import {BLACK} from './colors';

export const Text = styled.Text`
  color: ${BLACK};
`;

export const Title = styled(Text)`
  font-size: 32;
  font-weight: 600;
`;
