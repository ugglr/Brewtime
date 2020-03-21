import React from "react";
import styled from "styled-components";

const StripContainer = styled.div``;

//PROPS
/*
githubURL
gitlabURL
twitterURL
instagramURL
facebookURL: NOTE: nobody cares about facebook anymore.
*/

const SocialStrip = props => {
  return (
    <StripContainer>
      {props.githubURL && <p>{props.githubURL}</p>}
      {props.gitlabURL && <p>{props.gitlabURL}</p>}
      {props.twitterURL && <p>{props.twitterURL}</p>}
      {props.facebookURL && <p>{props.facebookURL}</p>}
      {props.instagramURL && <p>{props.instagramURL}</p>}
    </StripContainer>
  );
};

export default SocialStrip;
