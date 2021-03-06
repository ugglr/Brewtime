import React from "react";
import styled from "styled-components";

import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeForm from "./SubscribeForm";

import { BLACK } from "./Theme/colors";

const MAILCHIMP_URL =
  "https://app.us19.list-manage.com/subscribe/post?u=d14a388ae39a3ae53bff9dc31&amp;id=87fb0a61c2";

const HeaderContainer = styled.div`
  height: 70vh;
  padding: 1.2em 1.2rem;
  display: flex;
  flex-direction: column;
`;
const TextContainer = styled.div``;
const Title = styled.h1`
  color: ${BLACK};
  font-size: 7rem;
  margin-bottom: 0px;
`;
const Title2 = styled.h1`
  color: ${BLACK};
  font-size: 4rem;
`;
const Subtitle = styled.h2`
  color: ${BLACK};
  font-size: 2rem;
`;
const SubscribeFormContainer = styled.div`
  margin-top: 2rem;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Title>{props.title}</Title>
        <Title2>{props.title2}</Title2>
        <Subtitle>{props.subtitle}</Subtitle>
      </TextContainer>
      {props.subscribeForm && (
        <SubscribeFormContainer>
          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={({ subscribe, status, message }) => (
              <SubscribeForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </SubscribeFormContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
