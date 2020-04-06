import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 70vw;
  max-width: 45rem;
  flex-direction: row;
  padding: 16px 16px;
  margin-bottom: 3rem;
  border-radius: 50px;
  box-shadow: 28px 28px 56px #c6c3c0, -28px -28px 56px #ffffff;
`;
const ImgContainer = styled.div``;
const IMG = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50px;
  object-fit: cover;
`;
const TextContainer = styled.div`
  height: 10rem;
  margin-left: 2rem;
`;
const Title = styled.p``;
const Text = styled.p``;

const WideCard = props => {
  const { title, imgSrc, desc } = props;

  console.log("#### CARD PROPS ####", props);

  return (
    <Container>
      <ImgContainer>
        <IMG src={imgSrc} alt='Coffee Picture' />
      </ImgContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Text>{desc}</Text>
      </TextContainer>
    </Container>
  );
};

export default WideCard;
