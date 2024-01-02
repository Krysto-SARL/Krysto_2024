import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaInfoCircle, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header >
      <Navbar expand='md' collapseOnSelect>
      {/* <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect> */}
        <Container>
          <Navbar.Brand href='/'>
            <img className='logo' src={logo} alt="Logo Krysto" />
           </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart' className='header_link'>
                <FaInfoCircle/> A propos
              </Nav.Link>
              <Nav.Link href='/login'  className='header_link'>
                <FaUser /> Connexion
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;