import React from "react";
import styled, { css } from "styled-components";

import { FERN_GREEN as PrimaryColor } from "./Theme/colors";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${PrimaryColor};
  color: ${PrimaryColor};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1.5rem;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background: ${PrimaryColor};
      color: white;

      &:hover {
        background: transparent;
        color: ${PrimaryColor};
      }
    `};
`;

const B = props => {
  if (!props.onClick) return <Button>No Onclick</Button>;
  return <Button {...props}>{props.children}</Button>;
};

export default B;
