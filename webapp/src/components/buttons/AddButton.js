import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import RingIMG from '../../images/icon-ring.svg';
import ButtonIMG from '../../images/credit.svg';
import { Caption2, SmallText } from '../styles/TextStyles';
export default function PurchaseButton(props) {
  return (
    <Link to="/AddTransaction">
      <Wrapper>
        <IconWrapper>
          <Icon src={ButtonIMG} />
          <Ring src={RingIMG} />
        </IconWrapper>
        <TextWrapper>
          <Title>Add</Title>
          <Subtitle>add a transaction</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  margin-bottom: 50px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  justify-content: start;
  align-items: center;
  gap: 20px;
  transition: 0.5s ease-out;
  //   *,
  //   & {
  //     transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  //   }
  :hover {
    background: rgba(265, 265, 265, 0.1);
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    .icon {
      transform: scale(1.2);
    }
  }
`;

const Title = styled(Caption2)`
  color: black;
`;

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: #36454f;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg);
  }
`;
const Icon = styled.img`
  width: 29px;
  height: 29px;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`;
