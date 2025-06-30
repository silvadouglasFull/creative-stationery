import type { Styles } from "@components/navbarPublic/styles/types"
import { colors } from "@flavor/colors"
export const styles: Styles = {
    bgDefault: {
        backgroundColor: colors.dark,
    },
    bgTransparent: {
        backgroundColor: 'transparent'
    },
    blurStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)', // necessário para Safari
    }
}