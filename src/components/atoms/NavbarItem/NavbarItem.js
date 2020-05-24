import React from 'react';
import styled, { css } from 'styled-components';
import PropType from 'prop-types';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
    color: white;

    @media (min-width: 768px){
        width: 55px;
        height: 55px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }    
`
const IconWrapper = styled.div`
    display: none;
    
    @media (min-width: 768px){
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${props => props.pathName===props.currentPath && css`
            color: #454140;
            background-color: #fff2df;
        `}
    }

`
const NameWrapper = styled.p`
    font-size: 1.6rem;
    padding: 20px 0;

    @media (min-width: 768px){
        padding: 0;
        font-size: 1.1rem;
        margin: 5px 0 0 0;
    }
`

const NavbarItem = ({ icon, name, pathName, location }) => (
    <Wrapper>
        <IconWrapper pathName={pathName} currentPath={location.pathname}>
            <FontAwesomeIcon icon={icon} />
        </IconWrapper>
        <NameWrapper>
            {name}
        </NameWrapper>
    </Wrapper>
)

NavbarItem.propTypes = {
    icon: PropType.object.isRequired,
    name: PropType.string.isRequired,
    pathName: PropType.string.isRequired
}

export default withRouter(NavbarItem);