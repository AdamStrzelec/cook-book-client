import React from 'react';
import styled from 'styled-components';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import MainTemplate from '../templates/MainTemplate';
import RecipesItems from '../components/molecules/RecipesItems/RecipesItems';
import Searchbar from '../components/organisms/Searchbar/Searchbar';
import RecipesOptions from '../components/organisms/RecipesOptions/RecipesOptions';
import createQueryString from '../utils/CreateQueryString';
import getSearchOptions from '../utils/GetSearchOptions';
import getSearchInputString from '../utils/GetSearchInputString';

const Wrapper = styled.div`

`
const OptionsWrapper = styled.div`
    width: 250px;
    height: calc(100vh - 70px);
    /* background-color: gray; */
    position: fixed;
    @media(max-width: 768px){
        display: none;
    }
`
const SearchbarWrapper = styled.div`
    position: fixed;
    top: 90px;
    width: calc(100% - 250px);
    padding: 0 40px;
    height: 40px;
    z-index: 100;
`
const ItemsWrapper = styled.div`
    width: 100%;
    padding-left: 250px;
    padding-top: 120px;
    @media(max-width: 768px){
        padding-left: 0;
    }
`

class Recipes extends React.Component{

    state = {
        pageNumber: 1,
        pagesCount: 0,
        redirect: false,
        recipes: [],
        recipesOptions: [],
        searchInput: '',
    }

    componentDidMount(){

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.recipesOptions!==this.state.recipesOptions){
            this.setState({redirect: true});
        }
        if(prevState.searchInput!==this.state.searchInput){
            this.setState({redirect: true});
        }
        if(this.props.location.search!==prevProps.location.search){
            this.setState({
                recipesOptions: getSearchOptions(this.props.location.search.replaceAll('%20', ' ')),
                searchInput: getSearchInputString(this.props.location.search)
            })
        }
    }

    setRecipesOptions(options){
        this.setState({recipesOptions: options})
    }

    setSearchInput(searchString){
        this.setState({searchInput: searchString})
    }

    handleRedirect(){
        this.setState({redirect: false})
        const recipesOptions = [...this.state.recipesOptions].toString().replaceAll(',',' ')
        return <Redirect to={{
            pathname: '/recipes/page/1',
            search: createQueryString(recipesOptions, this.state.searchInput)
        }} />
    }


    render(){
        return(
            <MainTemplate>
                <Wrapper>
                    <OptionsWrapper>
                        <RecipesOptions 
                            getRecipesOptions={(options) => this.setRecipesOptions(options)}
                            recipesOptions={getSearchOptions(this.props.location.search.replaceAll('%20', ' '))}
                        />
                    </OptionsWrapper>
                    <ItemsWrapper>
                        <SearchbarWrapper>
                            <Searchbar 
                                setSearchInput={(searchInput) => this.setSearchInput(searchInput)}
                                searchInputString={getSearchInputString(this.props.location.search)}
                            />
                        </SearchbarWrapper>
                        <div>
                            {this.state.redirect && 
                                this.handleRedirect()
                            }
                            <Route exact path='/recipes' component={RecipesItems} />
                            <Route path='/recipes/page/:nr' component={RecipesItems} />
                        </div>                        
                    </ItemsWrapper>
                </Wrapper>
            </MainTemplate>
        )
    }

}

export default Recipes;