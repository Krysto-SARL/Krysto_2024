import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaBell, FaHome, FaInfoCircle, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <header>
      <Navbar expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="logo" src={logo} alt="Logo Krysto" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link className="header_link">
                  <FaHome /> Accueil
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link className="header_link">
                  <FaBell /> Services
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
                <Nav.Link className="header_link">
                  <FaInfoCircle /> A propos
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="header_link">
                  <FaUser /> Connexion
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
