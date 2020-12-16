import React, { useState } from 'react';
import styled from 'styled-components';
import checkIcon from '../../../images/check-solid.svg';

const Wrapper = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
`

export const Checkbox = styled.input`
    cursor: pointer;
    width: 100%;
    height: 100%;
    margin: 0%;
    opacity: 0;
    & + Label{
        &:before{
            position: absolute;
            left: 10px;
            top: 50% + 9px;
            content: '';
            width: 18px;
            height: 18px;
            background-color: white;
            border: 1px solid #3b3a30;
            border-radius: 5px;
        }
    }
    &:checked + Label{
        &:before{
            border-radius: 5px;
            background-image: url(${checkIcon});
        }
    }
`

export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e0e2e4;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    /* text-transform: capitalize; */
`

const RecipeOtionType = ({ name }) => {

    const [isChecked, setChecked] = useState(false)

    return(
        <Wrapper>
            <Checkbox type="checkbox" />
            <Label>{name}</Label>
        </Wrapper>
    )
}

export default RecipeOtionType;