import React from "react";
import styled from "styled-components";

import { BLACK } from "./Theme/colors";

const featurePoints = [
  {
    title: "Beans",
    subtitle:
      "Dark, Medium, Light; Kenya, Columbia, Yunnan; What are you brewing with?"
  },
  {
    title: "Water",
    subtitle:
      "Have you ever payed any attention to the water you are brewing with?"
  },
  {
    title: "Equipment",
    subtitle: "What's your kit? Chemex, V60, Melitta. Spoon, no spoon?"
  },
  {
    title: "Ratio",
    subtitle: "Only grams per liter, everything else is unscientific."
  },
  {
    title: "Phases",
    subtitle:
      "What's your bloom time? Phase 1, Phase 2, Phase 3, or just pour it in?"
  },
  {
    title: "Drawdown",
    subtitle:
      "Do you watch as your slurry runs dry, or time to check some emails?"
  }
];

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.7rem;
  color: ${BLACK};
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const NeoMorphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  max-width: 70vw;
  padding: 12px 32px;
  border-radius: 50px;
  background: #e9e5e2;
  margin-bottom: 3rem;
  box-shadow: 12px 12px 40px #a5a3a0, -12px -12px 40px #ffffff;
`;
const CardTitle = styled.h1`
  margin-bottom: 0;
`;
const CardSubtitle = styled.p`
  font-size: 1.3rem;
`;

function FeatureBlock() {
  return (
    <FeatureContainer>
      <Title>Keep track of all the parameters.</Title>
      <NeoMorphContainer>
        {featurePoints.map(({ title, subtitle }) => {
          return (
            <>
              <CardTitle>{title}</CardTitle>
              <CardSubtitle>{subtitle}</CardSubtitle>
            </>
          );
        })}
      </NeoMorphContainer>
    </FeatureContainer>
  );
}

export default FeatureBlock;
