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

export const addRecie = (formData) => {
    return axios.post(url+'/recipe', formData, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        }
    })
}

export const getRecipes = (pageNumber=1, options, name) => {
    return axios.get(url+'/recipe/page/'+pageNumber, {
        params: {
            name: name,
            type: options
        }
    })
}

export const findRecipes = (name, type) => {
    return axios.get(url+'/recipe/find', {
        params: {
            name: name,
            type: type
        }
    })
}
