import { colors } from "@flavor/colors"
import type { ButtonProps } from "react-bootstrap"
import { Button as ReactBootstrapButton } from "react-bootstrap"

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ReactBootstrapButton
            {...props}
            style={{
                backgroundColor: colors.mauve,
                ...props.style,
                border: `.0625rem solid ${colors.mauve}`
            }}
        >
            {props.children}
        </ReactBootstrapButton>
    )
}