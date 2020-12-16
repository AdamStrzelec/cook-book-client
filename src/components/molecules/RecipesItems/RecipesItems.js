import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RecipeItem from '../RecipeIcon/RecipeItem';
import { getRecipes } from '../../../api';
import getSearchOptions from '../../../utils/GetSearchOptions';
import getSearchInputString from '../../../utils/GetSearchInputString';
import { 
    setSearchbarIpnutString as setSearchbarIpnutStringAction,
    setRecipesOptions as setRecipesOptionsAction
     } from '../../../actions';


class RecipesItems extends React.Component{

    state = {
        recipesArray: [],
        recipesOptions: []
    }
    componentDidMount(){
        this.props.setSearchbarIpnutString(getSearchInputString(this.props.location.search));
        // this.props.setRecipesOptions(getSearchOptions(this.props.location.search.replaceAll('%20', ' ')))
        this.fetchRecipes();
    }
    componentDidUpdate(prevProps){
        if(this.props.location.search!==prevProps.location.search){
            this.fetchRecipes()
        }
    }
    fetchRecipes(){
        getRecipes(this.props.match.params.nr, getSearchOptions(this.props.location.search.replaceAll('%20', ' ')), getSearchInputString(this.props.location.search))
        .then(response => {
                this.setState({recipesArray: response.data.recipes})
            }
        )
    }

    render(){
        return(
            <div>   
                {
                this.state.recipesArray.map((recipe, index) => <RecipeItem
                    key={index} 
                    id={recipe.id}
                    image={recipe.imagePath}
                    name={recipe.name}
                    description={recipe.description}
                    grade={recipe.averageRate}
                    type={recipe.type}
                />)
                }     
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userName: state.userName
})
const mapDispatchToProps = (dispatch) => ({
    setSearchbarIpnutString: (inputString) => dispatch(setSearchbarIpnutStringAction(inputString)),
})


export default connect(mapStateToProps, mapDispatchToProps)(RecipesItems);
