import { Icon } from '@components/icons';
import { Logo } from '@components/logo';
import { Links } from '@components/navbarPublic/links';
import { links } from '@flavor/links';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavigationBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className="fixed-top bg-dark">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <Icon name='fa-solid fa-bars text-light' />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Links items={links} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
