const initialState = {
    isSignInPanelOpen: false,
    signInPanelType: '',
    userName: '',
    userID: '',
    searchbarInputString: '',
    currentPageNumber: 1,
    recipesOptions: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'OPEN_SIGN_IN_PANEL':
            return {...state, isSignInPanelOpen: action.payload.isSignInPanelOpen, signInPanelType: action.payload.panelType};
        case 'CLOSE_SIGN_IN_PANEL':
            return {...state, isSignInPanelOpen: action.payload.isSignInPanelOpen}
        case 'REDIRECT_TO_REGISTER':
            return {...state, signInPanelType: action.payload.panelType}
        case 'SIGN_IN':
            return {...state, userID: action.payload.userID, isSignInPanelOpen: action.payload.isSignInPanelOpen, userName: action.payload.userName}
        case 'SIGN_UP':
            return {...state, userID: action.payload.userID, isSignInPanelOpen: action.payload.isSignInPanelOpen, userName: action.payload.userName}
        case 'LOGOUT':
            return {...state, userID: action.payload.userID, userName: ''}
        case 'AUTHENTICATE':
            return {...state, userID: action.payload.userID, userName: action.payload.userName}
        case 'SET_SEARCHBAR_INPUT_STRING':
            return {...state, searchbarInputString: action.payload.searchbarInputString}
        // case 'SET_PAGE_NUMBER':
        //     return {...state, currentPageNumber: action.payload.currentPageNumber}
        case 'SET_RECIPES_OPTIONS':
            return {...state, recipesOptions: action.payload.recipesOptions}
        default: 
            return state;
    }
}

export default rootReducer;