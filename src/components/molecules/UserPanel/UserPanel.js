import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import withDetectClickOutsideComponent from '../../../hoc/withDetectClickOutsideComponent';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faBookOpen, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Header from '../../atoms/Header/Header';
import UserPanelItem from '../../atoms/UserPanelItem/UserPanelItem';
import { logout as logoutAction } from '../../../actions';

const Wrapper = styled.div`
    padding-top: 40px;
    @media (min-width: 768px){
        
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
        cursor: pointer;
        position: relative;
    }

`
const UserNameWrapper = styled.div`
    height: 30px;
    position: relative;
    top: -175px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    @media (min-width: 768px){
        width: 100%;
        height: 100%;
        background-color: black;

        position: absolute;
        top: 0;
        left: 0;
    }
`
const UserName = styled(Header)`
    color: white;
    font-weight: 300;
    margin-right: 10px;
    pointer-events: none;
`
const UserMenuOpenPointer = styled(FontAwesomeIcon)`
    transform: ${props => props.ismenuopen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease-in-out;
    @media (max-width: 768px){
        display: none;
    }
`

class UserPanel extends React.Component {

    state = {
        isUserMenuOpen: false,
        isFocused: false,
        redirect: false,
        redirectRoute: '',
    }
    componentDidMount(){
        this.setState({isFocused: this.props.isFocused});
    }

    componentDidUpdate(prevState){
        if(this.props.isFocused !== prevState.isFocused){
            this.setState({isFocused: this.props.isFocused})
            if(!this.props.isFocused){
                this.setState({isUserMenuOpen: false});
            }
        }
    }

    panelToggler(){
        this.setState({isUserMenuOpen: !this.state.isUserMenuOpen})
    }

    redirectTo(route){
        this.setState({
            redirect: true,
            redirectRoute: route
        })
    }

    renderRedirect(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirectRoute} />
        }
    }

    render(){
        const { isUserMenuOpen } = this.state;
        return(
            <Wrapper onClick={() => {this.panelToggler()}}>
                {this.renderRedirect()}
                <UserPanelItem index={isUserMenuOpen ? 1 : 0} icon={faUser} content={'Moje konto'} handleItemClick={() => this.redirectTo('/account')}/>
                <UserPanelItem index={isUserMenuOpen ? 2 : 0} icon={faBookOpen} content={'Dodaj przepis'} handleItemClick={() => this.redirectTo('/add/recipe')}/>
                <UserPanelItem index={isUserMenuOpen ? 3 : 0} icon={faSignOutAlt} content={'Wyloguj się'} handleItemClick={this.props.logout}/>
                <UserNameWrapper>
                    <UserName subheader>{this.props.userName}</UserName>
                    <UserMenuOpenPointer icon={faCaretDown} ismenuopen={isUserMenuOpen ? 1 : 0}/>
                </UserNameWrapper>
                
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    userName: state.userName
})
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutAction())
})



export default connect(mapStateToProps, mapDispatchToProps)(withDetectClickOutsideComponent(UserPanel));
