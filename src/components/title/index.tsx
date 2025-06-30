import { colors } from "@flavor/colors";
import type React from "react";
import { Card } from "react-bootstrap";

export const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Card className="p-3 border-0 d-block d-md-none text-center" style={{
                backgroundColor: colors.mauve
            }}>
                <Card.Title>
                    {children}
                </Card.Title>
            </Card>
            <Card className="p-3 border-0 d-none d-md-block" style={{
                backgroundColor: colors.mauve
            }}>
                <Card.Title className="text-light text-center">
                    {children}
                </Card.Title>
            </Card>
        </>
    )
}