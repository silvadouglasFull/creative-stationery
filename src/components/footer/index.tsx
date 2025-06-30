import { CopyRight } from '@components/footer/copy';
import { Links } from '@components/footer/links';
import { ContactLinks } from '@components/footer/links/contact';
import { SocialMidiaLinks } from '@components/footer/links/socialMidia';
import { contact, links, socialMidia } from '@flavor/links';
import { Col, Row } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer className="bg-dark text-light" id="contato">
            <Row className='p-3'>
                <Col sm={6} md={4} className="mb-3">
                    <h5>Links</h5>
                    <Links items={links} />
                </Col>
                <Col sm={6} md={4} className="mb-3">
                    <h5>Redes Sociais</h5>
                    <SocialMidiaLinks items={socialMidia} />
                </Col>
                <Col sm={12} md={4}>
                    <h5>Contato</h5>
                    <ContactLinks items={contact} />
                </Col>
            </Row>
            <Row>
                <Col className='col-12'>
                    <CopyRight />
                </Col>
            </Row>
        </footer>
    );
};

