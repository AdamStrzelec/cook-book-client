import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { closeSignInPanel as closeSignInPanelAction, redirectToRegister as redirectToRegisterAction } from '../../../actions';
import Header from '../../atoms/Header/Header';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    transform: ${props => !props.isPanelOpen ? 'translateX(100%)' : 'translateX(0%)'};
    transition: transform 0.3s ease-in-out;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: #f0efef;
    z-index: 1000;

    @media(min-width: 576px){
        width: 350px;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
`

const InputWrapper = styled.div`
    width: 70%;
    margin-top: 20px;
`

const SignInButton = styled(Button)`
    margin-top: 20px;
    margin-bottom: 15px;
`
const RedirectParagraph = styled(Paragraph)`
    cursor: pointer;
    color: rgb(0, 128, 192);
`
class SignInPanel extends React.Component{
    // state = {
    //     isSignInPanelOpen: this.props.isSignInPanelOpen,
    // }

    render(){
        const { isSignInPanelOpen, panelType, redirectToRegister } = this.props;
        return(
            <Wrapper isPanelOpen={isSignInPanelOpen} >
                <CloseButton onClick={()=>this.props.closePanel()}>
                    <FontAwesomeIcon icon={faArrowRight} size={'2x'} />
                </CloseButton>
                <FontAwesomeIcon icon={faUser} size={'5x'} />
                <Header>{panelType === 'signin' ? 'Zaloguj się' : 'Zarejestruj się'}</Header>

                <InputWrapper>
                    <Input type={'input'} placeholder={'Login'} />
                </InputWrapper>
                {panelType==='signup' && <InputWrapper>
                    <Input type={'input'} placeholder={'E-mail'} />
                </InputWrapper>}
                <InputWrapper>
                    <Input type={'password'} placeholder={'Hasło'} />
                </InputWrapper>
                {panelType==='signup' && <InputWrapper>
                    <Input type={'password'} placeholder={'Powtórz hasło'} />
                </InputWrapper>}
                <SignInButton primary>{panelType === 'signin' ? 'Zaloguj się' : 'Zarejestruj się'}</SignInButton>
                {panelType === 'signin' &&
                <>
                <Paragraph>Nie masz jeszcze konta?</Paragraph>
                <RedirectParagraph onClick={() => redirectToRegister()}>Zarejestruj się</RedirectParagraph>
                </>}
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    isSignInPanelOpen: state.isSignInPanelOpen,
    panelType: state.signInPanelType
})
const mapDispatchToProps = dispatch => ({
    closePanel: () => dispatch(closeSignInPanelAction()),
    redirectToRegister: () => dispatch(redirectToRegisterAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(SignInPanel);