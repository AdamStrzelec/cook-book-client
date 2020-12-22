import axios from 'axios';
const url = 'http://localhost:4000';
// const url = 'https://damp-beach-18434.herokuapp.com';

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

export const addRecipe = (recipe) => {
    return axios.post(url+'/recipe',  
        {
            recipe
        },
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        }
    )
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

export const getRecipeById = (id) => {
    return axios.get(url+'/recipe/id/'+id)
}

export const addRateForRecipe = (recipeId, rate) => {
    return axios.post(url+'/rate', 
    {
        recipeId: recipeId,
        rate: rate
    }, 
    {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        }
    })
}
export const getTopRecipes = (count) => {
    return axios.get(url+'/recipe/top/'+count)
}

export const getUserInfo = (userId) => {
    return axios.get(url+'/user/info/'+userId, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        }
    });
}
