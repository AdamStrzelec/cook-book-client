import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 30px;
    padding: 5px;
    color: white;
    background-color: #7e4a35;
    border-radius: 15px;
    display: inline-flex;
    font-size: 14px;
`
const ContentWrapper = styled.div`
    /* width: 100%; */
    display: inline-block;
    padding-top: 2px;
    margin-left: 10px;
`
const DeleteIngredient = styled.div`
    width: 20px;
    height: 20px;
    background-color: #feb236;
    display: inline-block;
    margin-left: 10px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
`

const Ingredient = ({ingredient, deleteIngredient}) => (
    <Wrapper>
        <ContentWrapper>
            {ingredient.ingredient} - {ingredient.sizeUnit} {ingredient.sizeValue}
        </ContentWrapper>
        <DeleteIngredient onClick={deleteIngredient} >X</DeleteIngredient>
    </Wrapper>
)

export default Ingredient;
