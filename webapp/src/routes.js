import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { css } from '@emotion/core';
import { Home } from './home';
import AddTransactions from './components/AddTransactions';
import Header from './components/layout/Header';

function AppRouter() {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <Header />
        </nav>
        <div className="main-content" css={contentStyle}>
          <Route component={Home} exact path="/" />
          <Route component={AddTransactions} exact path="/AddTransaction" />
          {/* <Route component={HeroSection} exact path="/another" /> */}
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;

const layoutStyle = css`
  display: grid;
  grid-row-gap: 24px;
  padding: 8px;
`;

const navStyle = css`
  grid-row: 1;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  & > ul > li:not(:first-child) {
    margin-left: 16px;
  }
`;

const contentStyle = css`
  grid-row: 2;
`;
