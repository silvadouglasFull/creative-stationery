import type { Style } from "@components/bradCumps/types";

export const styles: Style = {
    section: {
        top: 0,
        width: '100vh',
        height: '50vh',
        position: 'relative',
        backgroundColor: '#e4a6fc'
    }
}

export const stylesDesktop: Style = {
    section: {
        ...styles,
        height: '30vh',
        backgroundColor: '#e4a6fc'

    }
}
export const stylesLargeDesktop: Style = {
    section: {
        ...styles,
        height: '60vh',
        backgroundColor: '#e4a6fc'
    }
} 