import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Input from './Input';

const InputWrapper = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

storiesOf('Input', module)
    .add('input', ()=>
        <InputWrapper>
            <Input type={'text'} placeholder={'Wprowadź wartość'}/> 
        </InputWrapper>           
    )