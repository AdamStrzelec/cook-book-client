import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import routes from '../../../routes';
import { faHome, faInfo, faBookOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import NavbarItem from '../../atoms/NavbarItem/NavbarItem';
import UserPanel from '../../molecules/UserPanel/UserPanel';
import Button from '../../atoms/Button/Button';
import ToggleButon from '../../atoms/ToggleButton/ToggleButton';
import { openSignInPanel as openSignInPanelAction } from '../../../actions';

const NavbarWrapper = styled.div`    
    z-index: 1000;
    background-color: rgba(41, 47, 51, 0.85);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    
    ${props => props.isMenuOpen && css`
        transform: translateX(0);
    `}

    @media (min-width: 768px){
        background-color: rgba(41, 47, 51, 0.75);
        width: 100vw;
        height: 70px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
        transform: translateX(0);
    }

`
const ListWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    @media (min-width: 768px){
        flex-direction: row;
    }
`
const StyledListItem = styled.li`
    margin: 0px 17px;
    text-align: center;
`
const UserPanelWrapper = styled.div`

    @media (min-width: 768px){
        position: absolute;
        width: 250px;
        height: 100%;
        right: 0;
        top: 0;
    }
`
const UserMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px){
        width: 200px;
        flex-direction: row;
        justify-content: space-between;
    }

`
const StyledLink = styled(Link)`
    text-decoration: none;
`
const ToggleButonWrapper = styled.div`
    position: absolute;
    top: 5px;
    left: 255px;
`

const Navbar = ({openSignInPanel, userID}) => {
    
    const [isMenuOpen, menuToggler] = useState(false);
    
    const menuToggle = (isOpen) => {
        menuToggler(isOpen);
    }
    return(
        <NavbarWrapper isMenuOpen={isMenuOpen}>
            <ToggleButonWrapper>
                <ToggleButon isMenuOpen={isMenuOpen} menuToggle={menuToggle}/>
            </ToggleButonWrapper>
            
            <ListWrapper>
                <StyledListItem>
                    <StyledLink to={routes.home}>
                        <NavbarItem icon={faHome} name={'HOME'} pathName={routes.home} />
                    </StyledLink>
                </StyledListItem>

                <StyledListItem>
                    <StyledLink to={routes.recipes}>
                        <NavbarItem icon={faBookOpen} name={'PRZEPISY'} pathName={routes.recipes} />
                    </StyledLink>
                </StyledListItem>

                <StyledListItem>
                    <StyledLink to={routes.about}>
                        <NavbarItem icon={faInfo} name={'O NAS'} pathName={routes.about} />
                    </StyledLink>
                </StyledListItem>

                <StyledListItem>
                    <StyledLink to={routes.contact}>
                        <NavbarItem icon={faPhone} name={'KONTAKT'} pathName={routes.contact} />
                    </StyledLink>
                </StyledListItem>
            </ListWrapper>

            {userID==='' ? 
            <UserMenu>
                <Button type={'login'} onClick={()=>{menuToggler(false); openSignInPanel('signin')}}>Logowanie</Button>
                <Button type={'register'} onClick={()=>{menuToggler(false); openSignInPanel('signup')}}>Rejestracja</Button>
            </UserMenu> 
            : 
            <UserPanelWrapper>
                <UserPanel />  
            </UserPanelWrapper>}                   
        </NavbarWrapper>
    )
}
const mapStateToProps = (state) => ({
    userID: state.userID,
})
const mapDispatchToProps = dispatch => ({
    openSignInPanel: (panelType) => dispatch(openSignInPanelAction(panelType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));