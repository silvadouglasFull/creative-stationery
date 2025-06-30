import type { Link as TLink } from "@flavor/links/types";
import type React from "react";
import { Col } from "react-bootstrap";
import { Link as ReactRouterDownLink } from 'react-router-dom';
export const Link: React.FC<TLink> = ({ namePage, route }: TLink) => {
    return (
        <Col>
            <ReactRouterDownLink to={route} className="text-light text-decoration-none" >
                {namePage}
            </ReactRouterDownLink>
        </Col>

    )
}