import React from 'react';
import styled from 'styled-components';

import { MAIN_BG, GRAY as SHADOW, BLACK, BLACK as TEXT_COLOR } from './colors';

const NeoMorphicStyledInput = styled.input`
  height: 35px;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 16px;
  font-weight: 550;
  border-radius: 50px;
  padding: 16px 18px;
  appearance: none;
`;

export const NeoMorphicInput = ({ field, form, ...props }) => {
  return <NeoMorphicStyledInput {...field} {...props} />;
};

export const InputContainer = styled.div`
  height: 110px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  background-color: red;
`;

export const LabelContainer = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  color: ${BLACK};
`;

export const ErrorMsgContainer = styled.div`
  height: 10px;
  margin-top: 5px;
  color: red;
`;
