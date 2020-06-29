
export const openSignInPanel = (panelType) => {
    return {
        type: 'OPEN_SIGN_IN_PANEL',
        payload: {
            isSignInPanelOpen: true,
            panelType: panelType
        }
    }
}

export const closeSignInPanel = () => {
    return {
        type: 'CLOSE_SIGN_IN_PANEL',
        payload: {
            isSignInPanelOpen: false
        }
    }
}

export const redirectToRegister = () => {
    return {
        type: 'REDIRECT_TO_REGISTER',
        payload: {
            panelType: 'signup'
        }
    }
}
