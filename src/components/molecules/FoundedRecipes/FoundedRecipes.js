import React from 'react';
import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'
import FoundedRecipeItem from '../../atoms/FoundedRecipeItem/FoundedRecipeItem';

const Wrapper = styled.div`
    width: 100%;
    background-color: gray;
    padding: 10px;
    ${props => props.recipes.length===0 && css`
        display: none;
    `}
`
const ResultWrapper = styled.div`
    width: 100%;
    ${props => props.recipes.length>3 && css`
        height: 160px;
        overflow-y: scroll;
    `}
`
const LoadingWrapper = styled.div`
    width: 100%;
    height: 160px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FoundedRecipes = ({ recipes, isLoading }) => (
    
    <Wrapper recipes={recipes}>
        {!isLoading ? <ResultWrapper recipes={recipes}> {recipes.map((recipe, index) => <FoundedRecipeItem 
            key={index}
            id={recipe._id}
            name={recipe.name}
            type={recipe.type}
            image={recipe.imagePath}
            averageRate={recipe.averageRate}
        />)} </ResultWrapper> : 
            <LoadingWrapper>
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </LoadingWrapper>}
    </Wrapper>
)

export default FoundedRecipes;