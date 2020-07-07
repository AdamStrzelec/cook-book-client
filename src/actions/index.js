
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
            isSignInPanelOpen: null
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

export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: {
            userID: ''
        }
    }
}
