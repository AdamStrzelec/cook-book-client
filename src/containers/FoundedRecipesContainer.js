import React from 'react';
import FoundedRecipes from '../components/molecules/FoundedRecipes/FoundedRecipes';
import { findRecipes } from '../api';

class FoundedRecipesContainer extends React.Component {

    state = {
        recipes: [],
        isLoading: true,
    }

    fetchData(inputValue, types){
        console.log(inputValue)
        findRecipes(inputValue, types)
        .then(response => {
                console.log(response.data.recipes);
                this.setState({ recipes: response.data.recipes, isLoading: false})
        })
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.fetchData(this.props.inputValue, this.props.recipeTypes);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.inputValue !== prevProps.inputValue){
            this.setState({isLoading: true})
            this.fetchData(this.props.inputValue, this.props.recipeTypes)
        }
    }

    render(){
        return(
            <div>
                <FoundedRecipes recipes={this.state.recipes} isLoading={this.state.isLoading} />
            </div>
        )
    }
}

export default FoundedRecipesContainer;
