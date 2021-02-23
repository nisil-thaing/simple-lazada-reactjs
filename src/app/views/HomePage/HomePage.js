import React from 'react';

import { Container } from './HomePage.style';

function HomePage () {
  return <Container className="text-center pt-4 pt-lg-5 pb-4 pb-lg-5">
    <h1>Welcome to Simple Lazada Page</h1>
    <p className="mt-4">Please chose a category above to continue</p>
  </Container>;
}

export default HomePage;