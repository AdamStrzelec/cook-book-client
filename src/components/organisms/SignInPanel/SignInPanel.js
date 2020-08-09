import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { closeSignInPanel as closeSignInPanelAction, redirectToRegister as redirectToRegisterAction } from '../../../actions';
import Header from '../../atoms/Header/Header';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { signIn as signInAction, signUp as signUpAction } from '../../../actions';

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

    state = {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    }

    clearState(){
        this.setState({
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        })
    }

    handleUserButton(panelType){
        if(panelType==='signin'){
            this.loginUser();
        }else{
            this.registerUser();
        }
    }

    loginUser(){
        const { name, password } = this.state;
        this.props.signIn(name, password);
    }
    registerUser(){
        const { email, name, password, repeatPassword } = this.state;
        if(password===repeatPassword){
            if(password.length>4){
                this.props.signUp(email, name, password);
            }else{
                console.log('pole hasło musi posiadać minimu 5 znaków');
                //to do handle too short password
            }
        }else{
            console.log('pola hasło i powtórz hasło są różne');
            // to do handle different password
        }
    }
    render(){
        const { isSignInPanelOpen, panelType, redirectToRegister } = this.props;
        return(
            <Wrapper isPanelOpen={isSignInPanelOpen} >
                <CloseButton onClick={()=>{this.props.closePanel(); this.clearState()}}>
                    <FontAwesomeIcon icon={faArrowRight} size={'2x'} />
                </CloseButton>
                <FontAwesomeIcon icon={faUser} size={'5x'} />
                <Header>{panelType === 'signin' ? 'Zaloguj się' : 'Zarejestruj się'}</Header>

                <InputWrapper>
                    <Input setValue={this.state.name} getValue={name => this.setState({name})} type={'input'} placeholder={'Login'} />
                </InputWrapper>
                {panelType==='signup' && <InputWrapper>
                    <Input setValue={this.state.email} getValue={email => this.setState({email})} type={'text'} placeholder={'E-mail'} />
                </InputWrapper>}
                <InputWrapper>
                    <Input setValue={this.state.password} getValue={password => this.setState({password})} type={'password'} placeholder={'Hasło'} />
                </InputWrapper>
                {panelType==='signup' && <InputWrapper>
                    <Input setValue={this.state.repeatPassword} getValue={repeatPassword => this.setState({repeatPassword})} type={'password'} placeholder={'Powtórz hasło'} />
                </InputWrapper>}
                <SignInButton onClick={() => this.handleUserButton(panelType)} primary>{panelType === 'signin' ? 'Zaloguj się' : 'Zarejestruj się'}</SignInButton>
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
    signIn: (name, password) => signInAction(dispatch, name, password),
    signUp: (email, name, password) => signUpAction(dispatch, email, name, password),
    closePanel: () => dispatch(closeSignInPanelAction()),
    redirectToRegister: () => dispatch(redirectToRegisterAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(SignInPanel);