import React, { Component } from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserInfo } from '../api';
import Header from '../components/atoms/Header/Header';
import FoundedRecipeItem from '../components/atoms/FoundedRecipeItem/FoundedRecipeItem';


const Wrapper = styled.div`
    margin: 80px 30px;
`
const StyledHeader = styled(Header)`
    font-size: 2.3rem;
    margin-bottom: 15px;
`
const Span = styled.span`
    font-weight: bold;
    color: #515A5A;
`

class MyAccount extends Component {

    state = {
        userName: '',
        userEmail: '',
        recipesCount: 0,
        recipes: [],
        redirect: false,
        isLoaded: false,

    }

    handleRedirect(){
        return <Redirect to={'/'} />
    }
    fetchData(){
        console.log('data fetching ' + this.props.userId)
        getUserInfo(this.props.userId)
        .then(response => {
            console.log(response.data)
            this.setState({
                userName: response.data.name,
                userEmail: response.data.email,
                recipesCount: response.data.recipesCount,
                recipes: response.data.recipes,
                isLoaded: true
            })
        })
        .catch(()=>{
            this.setState({redirect: true})
        })
    }

    render(){
        const { userName, userEmail, recipesCount, recipes, isLoaded} = this.state;
        return(
            <MainTemplate>
                {(this.props.userId && !isLoaded) && this.fetchData()}
                <Wrapper>
                    {isLoaded ? <>
                        {this.state.redirect && this.handleRedirect()}
                        <StyledHeader><Span>Nazwa użytkownika</Span> {userName}</StyledHeader>
                        <StyledHeader><Span>Email użytkownika</Span> {userEmail}</StyledHeader>
                        {recipesCount>0 ? 
                            <>
                            <StyledHeader><Span>Liczba dodanych przepisów:</Span> {recipesCount}</StyledHeader>
                            {recipes.map(recipe => 
                                <FoundedRecipeItem 
                                    key={recipe._id}
                                    id={recipe._id}
                                    name={recipe.name}
                                    type={recipe.type}
                                    image={recipe.imagePath}
                                    averageRate={recipe.averageRate}
                                />    
                            )}
                            </>:
                            <StyledHeader>Nie posiadasz jeszcze żadnych przepisów</StyledHeader>
                        }
                        </>:
                        <>

                        </>
                    }   
                </Wrapper>    
            </MainTemplate>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.userID
})

export default connect(mapStateToProps)(MyAccount);
