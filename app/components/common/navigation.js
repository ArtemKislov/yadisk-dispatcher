import React from 'react';
import { Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">YaDisk-Dispatcher</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
};

export default Navigation;
