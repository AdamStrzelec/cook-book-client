import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import FollowIcon from './FollowIcon';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Background = styled.div`
    background-color: orange;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

storiesOf('FollowIcon', module)
    .add('icon', ()=>
        <Background>
            <FollowIcon icon={faFacebook} accountUrl={'jakiesl url'} accountName='name'/>
        </Background>      
    )