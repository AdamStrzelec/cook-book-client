import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/organisms/Navbar/Navbar';

const StyledWrapper = styled.div`

    @media (min-width: 768px){
        margin-top: 70px;
    }
`

const MainTemplate = ({children}) => (
    <StyledWrapper>
        <Navbar />
        {children}
    </StyledWrapper>
)

export default MainTemplate;