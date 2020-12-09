import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Header = () => {
  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <Link to="/">
            <p>DashBoard</p>
          </Link>
          <Link to="/AddTransaction">
            <p>Add Transaction</p>
          </Link>
          {/* <Link to="/AddTransaction">
            <p>Add User</p>
          </Link> */}
        </MenuWrapper>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid black;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  p {
    color: black;
    min-width: 100px;
    text-decoration: none;
    height: 50px;
    display: flex;
    justify-content: center;
    // gap: 10px;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s ease-out;
    :hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    }
  }
`;
