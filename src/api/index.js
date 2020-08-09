import axios from 'axios';
const url = 'http://localhost:4000';

export const signInUser = (userName, password) => {
    return axios.post(url+'/user/login', {
        nick: userName,
        password: password
    })
}
export const signUpUser = (email, userName, password) => {
    return axios.post(url+'/user/signup', {
        nick: userName,
        email: email,
        password: password
    })
}