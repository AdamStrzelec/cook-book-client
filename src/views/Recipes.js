import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRecipesOptions as setRecipesOptionsAction } from '../actions';
import MainTemplate from '../templates/MainTemplate';
import RecipesItems from '../components/molecules/RecipesItems/RecipesItems';
import Searchbar from '../components/organisms/Searchbar/Searchbar';
import RecipesOptions from '../components/organisms/RecipesOptions/RecipesOptions';
import createQueryString from '../utils/CreateQueryString';
import getSearchOptions from '../utils/GetSearchOptions';

const Wrapper = styled.div`

`
const OptionsWrapper = styled.div`
    width: 250px;
    height: calc(100vh - 70px);
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
        recipesOptionsByQuery: []
    }

    componentDidMount(){
        this.setState({recipesOptionsByQuery: getSearchOptions(this.props.location.search.replaceAll('%20', ' '))});
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.searchInput!==this.state.searchInput){
            this.setState({redirect: true});
        }
        if(prevProps.recipesOptions!==this.props.recipesOptions){
            this.setState({redirect: true});
        }
    }
    getRecipesOptionsByQuery(prevProps, props){
        if(prevProps.location.search!==props.location.search){
            this.setState({recipesOptionsByQuery: getSearchOptions(props.location.search.replaceAll('%20', ' '))});
        }
    }

    setSearchInput(searchString){
        this.setState({searchInput: searchString})
    }

    handleRedirect(){
        this.setState({redirect: false})
        const recipesOptions = [...this.props.recipesOptions].toString().replaceAll(',',' ')
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
                            recipesOptionsByQuery={getSearchOptions(this.props.location.search.replaceAll('%20', ' '))}
                            search={this.props.location.search}
                        />
                    </OptionsWrapper>
                    <ItemsWrapper>
                        <SearchbarWrapper>
                            <Searchbar 
                                setSearchInput={(searchInput) => this.setSearchInput(searchInput)}
                            />
                        </SearchbarWrapper>
                        <div>
                            {this.state.redirect && 
                                this.handleRedirect()
                            }
                            <Switch>
                                <Route exact path='/recipes' component={RecipesItems} />
                                <Route exact path='/recipes/page/:nr' component={RecipesItems} />
                            </Switch>
                        </div>                        
                    </ItemsWrapper>
                </Wrapper>
            </MainTemplate>
        )
    }

}

const mapStateToProps = state => ({
    recipesOptions: state.recipesOptions

})

const mapDispatchToProps = (dispatch) => ({
    setRecipesOptions: (recipesOptions) => dispatch(setRecipesOptionsAction(recipesOptions))
})

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);