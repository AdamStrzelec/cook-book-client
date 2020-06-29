import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/organisms/Navbar/Navbar';
import SignInPanel from '../components/organisms/SignInPanel/SignInPanel';

const StyledWrapper = styled.div`

    @media (min-width: 768px){
        margin-top: 70px;
    }
`

const MainTemplate = ({children}) => (
    <StyledWrapper>
        <Navbar />
        {children}
        <SignInPanel />
    </StyledWrapper>
)

export default MainTemplate;