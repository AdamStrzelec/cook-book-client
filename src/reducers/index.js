const initialState = {
    isSignInPanelOpen: false,
    signInPanelType: '',
    userID: '123',
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'OPEN_SIGN_IN_PANEL':
            return {...state, isSignInPanelOpen: action.payload.isSignInPanelOpen, signInPanelType: action.payload.panelType};
        case 'CLOSE_SIGN_IN_PANEL':
            return {...state, isSignInPanelOpen: action.payload.isSignInPanelOpen}
        case 'REDIRECT_TO_REGISTER':
            return {...state, signInPanelType: action.payload.panelType}
        case 'LOGOUT':
            return {...state, userID: action.payload.userID}
        default: 
            return state;
    }
}

export default rootReducer;