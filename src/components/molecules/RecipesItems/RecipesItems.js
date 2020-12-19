import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import RecipeItem from '../RecipeIcon/RecipeItem';
import { getRecipes } from '../../../api';
import getSearchOptions from '../../../utils/GetSearchOptions';
import getSearchInputString from '../../../utils/GetSearchInputString';
import Loader from 'react-loader-spinner';
import Pagination from '../../organisms/Pagination/Pagination';
import { 
    setSearchbarIpnutString as setSearchbarIpnutStringAction,
    setRecipesOptions as setRecipesOptionsAction
     } from '../../../actions';

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

class RecipesItems extends React.Component{

    state = {
        recipesArray: [],
        recipesOptions: [],
        recipesTotalCount: 0,
        currentPageNumber: 1,
        isLoading: true,
        redirect: false,
    }
    componentDidMount(){
        this.props.setSearchbarIpnutString(getSearchInputString(this.props.location.search));
        this.fetchRecipes();
    }
    componentDidUpdate(prevProps){
        if(this.props.location.search!==prevProps.location.search){
            this.setState({isLoading: true})
            this.fetchRecipes()
        }
        if(prevProps.location.pathname!==this.props.location.pathname){
            this.setState({isLoading: true})
            this.fetchRecipes()
        }
    }
    fetchRecipes(){
        getRecipes(this.props.match.params.nr, getSearchOptions(this.props.location.search.replaceAll('%20', ' ')), getSearchInputString(this.props.location.search))
        .then(response => {
                this.setState({
                    recipesArray: response.data.recipes, 
                    isLoading: false,
                    recipesTotalCount: response.data.totalCount
                });
            }
        )
    }

    render(){
        return(
            <div>   
                {this.state.isLoading ? 
                <LoadingWrapper>
                    <Loader
                    type="Oval"
                    color="#00BFFF"
                    height={450}
                    width={100}
                />
                </LoadingWrapper>
                :
                this.state.recipesArray.map((recipe, index) => <RecipeItem
                    key={index} 
                    id={recipe._id}
                    image={recipe.imagePath}
                    name={recipe.name}
                    description={recipe.description}
                    grade={recipe.averageRate}
                    type={recipe.type}
                />)
                }   
                <Pagination itemsCount={this.state.recipesTotalCount} pageNumber={this.props.match.params.nr} perPage={10} search={this.props.location.search}/> 
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSearchbarIpnutString: (inputString) => dispatch(setSearchbarIpnutStringAction(inputString)),
    setRecipesOptions: (recipesOptions) => dispatch(setRecipesOptionsAction(recipesOptions))
})


export default connect(null, mapDispatchToProps)(RecipesItems);
