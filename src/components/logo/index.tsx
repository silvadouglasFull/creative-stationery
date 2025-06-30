import { logo } from "@flavor/assets";
import type React from "react";
import { Image } from "react-bootstrap";
export const Logo: React.FC = () => {
    return (
        <>
            <Image src={logo} width={220} />
        </>
    )
}