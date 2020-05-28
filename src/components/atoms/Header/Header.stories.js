import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Header from './Header';

const InputWrapper = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

storiesOf('Header', module)
    .add('Header', ()=>
        <InputWrapper>
            <Header>Header</Header> 
        </InputWrapper>           
    )
    .add('Subheader', ()=>
    <InputWrapper>
        <Header subheader>Header</Header> 
    </InputWrapper>           
)