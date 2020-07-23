import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Select from '../../atoms/Select/Select';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
const InputWrapper = styled.div`
    width: 100%;
`
const InputIngredientWrapper = styled.div`
    margin-right: 10px;
    display: inline-block;
    width: calc(100% - 10px);
    @media(min-width: 768px){
        width: calc(70% - 10px);
    }
`
const InputPortionWrapper = styled.div`
    width: calc(60% - 10px);
    display: inline-block;
    margin-right: 10px;
    margin-top: 5px;
    @media(min-width: 768px){
        width: calc(20% - 10px);
        margin-top: 0;
    }
`
const SelectWrapper = styled.div`
    width: calc(40% - 10px);
    display: inline-block;
    @media(min-width: 768px){
        width: calc(10% - 10px);
    }
`
const AddIngredientButton = styled(Button)`
    width: 40px;
    height: 40px;
    font-size: 30px;
`

const AddingIngredientPanel = ({addIngredient}) => {

    const [name, setIngredientName] = useState('');
    const [portion, setPortion] = useState('');
    const [type, setType] = useState('g');

    return(
        <Wrapper>
            <InputWrapper>
                <InputIngredientWrapper>
                    <Input setValue={name} getValue={setIngredientName} type={'text'} placeholder={'Nazwa składnika'}/>
                </InputIngredientWrapper>
                
                <InputPortionWrapper>
                    <Input setValue={portion} getValue={setPortion} type={'number'} placeholder={'Porcja'}/>
                </InputPortionWrapper>
                <SelectWrapper>
                    <Select defaultValue="g" onChange={e => setType(e.target.value)}>
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="sztuk">sztuk</option>
                    </Select>
                </SelectWrapper>

            </InputWrapper>
            <AddIngredientButton 
            secondary
            onClick={e => {e.preventDefault(); if(name && portion && portion>0){
                setIngredientName('');
                setPortion('');
                addIngredient(
                    {
                        name: name,
                        portion: portion,
                        type: type
                    }
                )}}}>
                +
            </AddIngredientButton>
        </Wrapper>
    )
}

export default AddingIngredientPanel;