import { actionsFunctions } from "@components/contacts/contactAction/constants"
import type { Contact } from "@flavor/links/types"

export const handleContactAction = ({ type, text }: Contact) => {
    const action = actionsFunctions[type]
    action && action(text)
}