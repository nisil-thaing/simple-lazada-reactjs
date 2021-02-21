import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Container } from './MainHeader.style';

function MainHeader () {
  return <Container>
    <ul>
      <li>
        <Link to="/tacos">Tacos</Link>
      </li>
      <li>
        <Link to="/sandwiches">Sandwiches</Link>
      </li>
    </ul>
  </Container>;
}

export default MainHeader;