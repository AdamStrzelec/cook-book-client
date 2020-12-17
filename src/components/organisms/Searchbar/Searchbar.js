import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FoundedRecipesContainer from '../../../containers/FoundedRecipesContainer';
import withDetectClickOutsideComponent from '../../../hoc/withDetectClickOutsideComponent';

const Wrapper = styled.div`
    width: 100%;
    padding-right: 60px;
    position: relative;
    border-radius: 15px;
`
const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 15px;
    font-size: 20px;
    border: none;
    outline: none;
    background-color: #e0e2e4;
`
const SearchButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    height: 40px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #3b3a30;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SearchIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 17px;
`
const SearchResult = styled.div`
    position: absolute;
    left: 0;
    top: 40px;
    width: 100%;
    padding: 0 15px;
`

let intervalId;

class Searchbar extends React.Component {

    state = {
        searchInputValue: '',
        isSearchResultVisible: false
    }


    findRecipes(event){
        let eventValue = event.target.value;
        if(eventValue.length<=1){
            this.setState({isSearchResultVisible: false});
        }
        clearInterval(intervalId)
        intervalId = setInterval(() => {
            if(eventValue.length>1){
                this.setState({searchInputValue: eventValue});
            }
            clearInterval(intervalId);
        }, 500);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.searchInputValue!==prevState.searchInputValue){
            if(this.state.searchInputValue.length>1){
                this.setState({isSearchResultVisible: true});
            }else{
                this.setState({isSearchResultVisible: false});
            }
        }
    }

    render(){
        const { searchInputValue, isSearchResultVisible } = this.state;
        const { isFocused } = this.props
        return(
            <Wrapper>
                <StyledInput 
                    placeholder='Wprowadź nazwę przepisu'
                    defaultValue={this.props.searchInputString}
                    onChange={e => {
                        this.findRecipes(e)
                        this.setState({searchInputValue: e.target.value})
                    }}/>
                <SearchButton onClick={()=>{this.props.setSearchInput(this.state.searchInputValue)}}>
                    <SearchIcon icon={faSearch}/>
                </SearchButton>
                {isSearchResultVisible && isFocused && 
                    <SearchResult>
                        <FoundedRecipesContainer inputValue={searchInputValue} recipeTypes={[]}/>
                    </SearchResult>
                }

            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    searchbarInputString: state.searchbarInputString
})

export default connect(mapStateToProps)(withDetectClickOutsideComponent(Searchbar));
