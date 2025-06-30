import type { Link as TLink } from "@components/footer/links/socialMidia/link/types";
import { Icon } from "@components/icons";
import type React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SocialMidiaLink: React.FC<TLink> = ({ nameSocialMidia, route, icon }: TLink) => {
    return (
        <Col>
            <Link to={route} className="text-light text-decoration-none">
                {icon ? <Icon name={icon} /> : null} {nameSocialMidia}
            </Link>
        </Col>

    )
}