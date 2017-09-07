import React from 'react';
import { Navbar } from 'react-bootstrap';
import history from 'Services/history';

const Navigation = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" onClick={(e) => { e.preventDefault(); history.push('/'); }}>YaDisk-Dispatcher</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
};

export default Navigation;
