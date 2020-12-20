import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRecipesOptions as setRecipesOptionsAction } from '../actions';
import MainTemplate from '../templates/MainTemplate';
import RecipesItems from '../components/molecules/RecipesItems/RecipesItems';
import Searchbar from '../components/organisms/Searchbar/Searchbar';
import RecipesOptions from '../components/organisms/RecipesOptions/RecipesOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import createQueryString from '../utils/CreateQueryString';
import getSearchOptions from '../utils/GetSearchOptions';

const Wrapper = styled.div`
    position: relative;
`
const OptionsWrapper = styled.div`
    top: 70px;
    left: 0px;
    z-index: 101;
    width: 250px;
    height: calc(100vh - 70px);
    position: fixed;
    @media(max-width: 768px){
        top: 0;
        height: 100vh;
        transition: transform 0.3s ease-in-out;
        transform: ${ props => props.isRecipesOptionsOpen ? 'translateX(0)' : 'translateX(-100%)'};
    }
`
const HideOptionsButton = styled.button`
    width: 100px;
    height: 40px;
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #909497;
    color: #CACFD2;
    border: none;
    outline: none;
    border-radius: 3px;
`
const SearchbarWrapper = styled.div`
    position: fixed;
    top: 90px;
    width: calc(100% - 250px);
    padding: 0 40px;
    height: 40px;
    z-index: 100;
    @media(max-width: 768px){
        width: 100%;
        top: 65px;
        padding: 0 10px;
    }
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
        isRecipesOptionsOpen: false,
        recipesOptionsByQuery: [],
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

    setRecipesOptionsOpen(){
        this.setState({isRecipesOptionsOpen: !this.state.isRecipesOptionsOpen});
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
                    <OptionsWrapper isRecipesOptionsOpen={this.state.isRecipesOptionsOpen}>
                        <RecipesOptions 
                            recipesOptionsByQuery={getSearchOptions(this.props.location.search.replaceAll('%20', ' '))}
                            search={this.props.location.search}
                        />
                        <HideOptionsButton onClick={()=>this.setState({isRecipesOptionsOpen: false})}>
                            <FontAwesomeIcon icon={faArrowLeft} size={'2x'}/>
                        </HideOptionsButton>
                    </OptionsWrapper>
                    <ItemsWrapper>
                        <SearchbarWrapper>
                            <Searchbar 
                                setSearchInput={(searchInput) => this.setSearchInput(searchInput)}
                                setRecipesOptionsOpen={() => this.setRecipesOptionsOpen()}
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