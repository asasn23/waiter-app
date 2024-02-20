import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="sm" className="mt-4 mb-4 rounded px-3">
      <Container>
        <Nav>
          <Nav.Item>
            <Navbar.Brand href="/">Waiter App</Navbar.Brand>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar