import React, { Component } from 'react';
import styled from 'styled-components'
import MainTemplate from '../templates/MainTemplate';
import GreetingPanel from '../components/organisms/GreetingPanel/GreetingPanel';
import RecipeItem from '../components/molecules/RecipeIcon/RecipeItem';
import Header from '../components/atoms/Header/Header';
import { getTopRecipes } from '../api';

const StyledHeader = styled(Header)`
    text-align: center;
    margin: 20px 0;
    color: #2C3E50;
`

class Home extends Component{

    state = {
        recipes: []
    }

    componentDidMount(){
        getTopRecipes(5)
        .then(response => {
            this.setState({recipes: response.data.recipes})
        })
    }

    render(){

        return(
            <MainTemplate>
            <GreetingPanel />
            <StyledHeader>Spróbuj naszych najlepszych przepisów</StyledHeader>
            {
                this.state.recipes.map(recipe => 
                    <RecipeItem 
                        key={recipe._id}
                        id={recipe._id}
                        image={recipe.imagePath}
                        name={recipe.name}
                        description={recipe.description}
                        grade={recipe.averageRate}
                        type={recipe.type}
                    />
                )
            }
            </MainTemplate>
        )
    }

}

export default Home;
