import React from 'react';
import AddButton from '../buttons/AddButton';
import { H1, MediumText } from '../styles/TextStyles';
import { themes } from '../styles/ColorStyles';
import styled, { keyframes } from 'styled-components';
import GraphQL from '../graphs/GraphQL';
import ViewTransactions from '../transactions/ViewTransactions';

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            ADD <br />
            <span>Transaction</span>
            <br />
            here
          </Title>
          <Description>
            {/* <p>
              Dont skip design. Learn design and code, by building real apps with React and Swift. Complete courses
              about the best tools.
            </p> */}
          </Description>
          <AddButton title="Resume" subtitle="Click to view" />
        </TextWrapper>
        <GraphQL />
        <ViewTransactions />
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

export const animation = keyframes`
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
// 80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  //   overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`;
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;

  > * {
    :nth-child(1) {
      animation: ${animation} 1s 0.4s forwards;
    }
    // :nth-child(2) {
    //   animation: ${animation} 1s 0.4s forwards;
    // }
    :nth-child(3) {
      animation: ${animation} 1s 0s forwards;
    }
  
  }
`;
const Title = styled(H1)`
  color: #black;
  opacity: 0;
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: #36454f;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: black;
  }
  @media (max-width: 450px) {
    font-size: 48px;
  }
`;
const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
`;
