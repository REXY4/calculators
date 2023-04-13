/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { ButtonPrimary } from '../buttons';

export function NavbarPrimary({ user, logout, token }) {
  return (
    <Navbar bg="dark" variant="dark" className="mb-2">
      <Container>
        <Navbar.Brand href="/">Calculator Freelance</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{user && user.name}</a>
          </Navbar.Text>
          <Navbar.Text>
            <ButtonPrimary
              variant="outline-danger"
              label="Logout"
              type="submit"
              onClick={() => logout(token)}
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
