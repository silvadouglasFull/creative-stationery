import { handleContactAction } from "@components/contacts/contactAction"
import { Icon } from "@components/icons"
import { contact, socialMidia } from "@flavor/links"
import { Card, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
export const Contacts = () => {

    return (
        <Row className="d-flex justify-content-md-between justify-content-sm-center align-items-center">
            {contact.map(item => (
                <Card key={item.id} className="col-sm-12 col-md-6 mb-3 me-3" onClick={() => handleContactAction(item)} style={{
                    cursor: 'pointer',
                    height: 100,
                    width: '18rem'
                }}>
                    <Card.Body>
                        <Card.Title className="text-center">
                            {item.type}
                        </Card.Title>
                        <Card.Text className="text-center">
                            {item.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            {socialMidia.filter(item => item.nameSocialMidia !== 'Whatsapp').map(item => (
                <Card key={item.id} className="col-sm-12 col-md-6 mb-3 me-3" style={{
                    cursor: 'pointer',
                    height: 100,
                    width: '18rem'
                }}>
                    <Card.Body>
                        <Card.Title className="text-center">
                            {item.nameSocialMidia}
                        </Card.Title>
                        <Card.Text className="text-center">
                            <Link to={'#'} className="text-dark text-decoration-none">
                                {item.icon && (<Icon name={`${item.icon} fa-2x`} />)}
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    )
}