import React, { Fragment } from 'react';
import HeroSection from '../components/sections/HeroSection';
import graphQL from '../components/graphs/GraphQL';

export function Home() {
  return (
    <Fragment>
      {/* <Link to='/another'>Another route</Link> */}

      <HeroSection />
    </Fragment>
  );
}
