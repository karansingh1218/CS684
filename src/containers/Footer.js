import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <div classname = "footernavigation">
        <footer>
      <Grid>
        <Nav justified>
          <NavItem
            eventKey={1}>
            navigation 1 
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
            navigation 2
          </NavItem>
          <NavItem
            eventKey={3}>
          navigation 3
          </NavItem>
        </Nav>

        <div className="information">
          info4
        </div>
      </Grid>
    </footer>
    </div>
  );
}

export default Footer;