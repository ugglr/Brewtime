import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div``;

const AppContainer = props => {
  return <OuterContainer>{props.children}</OuterContainer>;
};

export default AppContainer;
