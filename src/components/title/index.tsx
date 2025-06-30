import { colors } from "@flavor/colors";
import type React from "react";
import { Card } from "react-bootstrap";

export const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Card className="p-3 border-0 text-center mb-3 mt-3" style={{
            backgroundColor: colors.mauve,
        }}>
            <Card.Title className="text-light text-center">
                {children}
            </Card.Title>
        </Card>
    )
}