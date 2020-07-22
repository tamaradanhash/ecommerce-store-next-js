import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
export default function Navigator() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: '#a28b51' /*'#ffac41'*/ /*'#856131'*/ }}
    >
      <Navbar.Brand href="/">
        Home
        <Unicons.UilHome />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact us</Nav.Link>
          <NavDropdown title="Products" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Living room</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Electronics</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Offers</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/myCart">
            Cart
            <Unicons.UilShoppingCart />
          </Nav.Link>
          <Nav.Link eventKey={2} href="/login">
            login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
