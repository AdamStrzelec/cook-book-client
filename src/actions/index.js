import axios from 'axios';
import { signInUser, signUpUser } from '../api';

function dispatchUserRegistration(response, dispatch, actionType){
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userID", response.data.userId);
    
    dispatch({
        type: actionType,
        payload: {
            userName: response.data.userName,
            userID: response.data.userId,
            isSignInPanelOpen: false
        }
    })
}

export const signIn = (dispatch, userName, password) => {
    signInUser(userName, password)
    .then(response => {
        dispatchUserRegistration(response, dispatch, 'SIGN_IN');
    })
    .catch(() => {
        console.log('nieprawidłowe dane logowania');
        return null;
    })
}

export const signUp = (dispatch, email, userName, password) => {
    signUpUser(email, userName, password)
    .then(() => signInUser(userName, password))
    .then(response => {
        dispatchUserRegistration(response, dispatch, 'SIGN_UP');
    })
    .catch((err) => {
        console.log('nie udalo sie utworzyc konta');
        let errorMessage = '';
        if(err.response.status===400){
            const errorPropertiesArray = Object.keys(err.response.data.message.errors);
            for(let e in errorPropertiesArray){
                errorMessage += err.response.data.message.errors[errorPropertiesArray[e]].message + '\n\n';
            }    
        }else if(err.response.status===409){
            errorMessage = err.response.data.message
        }else{
            errorMessage = 'nie udalo sie utworzyc konta';
        }
        console.log(errorMessage)
        return null;
    })
}

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

export const logout = () => {
    localStorage.setItem("token", '')
    localStorage.setItem("userID", '')
    return {
        type: 'LOGOUT',
        payload: {
            userID: ''
        }
    }
}

export const authenticateUser = (dispatch) => {
    axios.post('http://localhost:4000/user/authenticate',
    {
        userId: localStorage.getItem('userID')
    },
    {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
    })
    .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userID", response.data.userId);
        dispatch({
            type: 'AUTHENTICATE',
            payload: {
                userID: response.data.userId,
                userName: response.data.userName
            }
        })
    })
    .catch(() => {
        localStorage.setItem("token", '')
        localStorage.setItem("userID", '')
    })
}

export const setSearchbarIpnutString = (searchbarInputString) => {
    console.log(searchbarInputString)
    return {
        type: 'SET_SEARCHBAR_INPUT_STRING',
        payload: {
            searchbarInputString: searchbarInputString
        }
    }
}
