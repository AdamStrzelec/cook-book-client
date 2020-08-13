import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import RecipesItems from '../components/molecules/RecipesItems/RecipesItems';
import { getRecipes } from '../api';

const Wrapper = styled.div`

`
const OptionsWrapper = styled.div`
    width: 200px;
    height: calc(100vh - 70px);
    background-color: gray;
    position: fixed;
    @media(max-width: 768px){
        display: none;
    }
`
const ItemsWrapper = styled.div`
    width: 100%;
    padding-left: 200px;
    padding-top: 120px;
    @media(max-width: 768px){
        padding-left: 0;
    }
`

class Recipes extends React.Component{

    state = {
        pageNumber: 1,
        pagesCount: 0,
        recipes: []
    }

    componentDidMount(){
        if(this.props.match.params.hasOwnProperty('nr')){
            this.setState({ pageNumber: this.props.match.params.nr});
        }
        getRecipes(this.props.match.params.nr)
            .then(response => {
                this.setState({ recipes: response.data.recipes });
                if(response.data.totalCount%10 !== 0){
                    this.setState({ pagesCount: parseInt((response.data.totalCount/10).toString().split(".")[0])+1 });
                    console.log(response.data)
                    
                }else{
                    this.setState({ pagesCount: response.data.totalCount/10 });
                }
            })
            .catch(err => err)
    }

    render(){
        return(
            <MainTemplate>
                <Wrapper>
                    <OptionsWrapper>
                        
                    </OptionsWrapper>
                    <ItemsWrapper>
                        <RecipesItems recipes={this.state.recipes}/>
                    </ItemsWrapper>
                </Wrapper>
            </MainTemplate>
        )
    }

}

export default Recipes;