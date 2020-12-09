import React from 'react';
import styled from 'styled-components';
const GraphQL = () => {
  return (
    <Wrapper>
      <div className="mockup3">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </div>
    </Wrapper>
  );
};

export default GraphQL;

const Wrapper = styled.div`
  position: relative;

  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;

    img {
      width: 650px;
      border-radius: 10px;
    }
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover div {
    transform: rotateX(0deg) rotateY(0deg);
    &.mockup3 {
      transition-delay: 0s;
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup3 {
    position: absolute;
    width: 701px;
    height: 428px;
    right: 62px;
    top: 60px;

    background: #899499;
    border: 0.342305px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 6.8461px;
  }
`;
