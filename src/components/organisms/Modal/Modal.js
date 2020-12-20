import React from 'react';
import styled from 'styled-components';
import Header from '../../atoms/Header/Header';
import Button from '../../atoms/Button/Button';
import { connect } from 'react-redux';
import { closeModal as closeModalAction } from '../../../actions';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10000;
    display: ${props => props.isOpen ? 'block' : 'none'};
`
const MessageWindwWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
    position: relative;
`
const MessageWindow = styled.div`
    width: 80%;
    max-width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 4px;
    transform: translate(-50%, -50%);
    background-color: #F2F4F4;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledHeader = styled(Header)`
    text-align: center;
`
const StyledButton = styled(Button)`
    margin-top: 20px; 
    width: 120px;
`

const Modal = ({ isOpen, modalMessage, closeModal }) => (
    <Wrapper isOpen={isOpen}>
        <MessageWindow>
            <StyledHeader subheader>
                {modalMessage}
            </StyledHeader>
            <StyledButton primary onClick={()=>closeModal()}>OK</StyledButton>
        </MessageWindow>
    </Wrapper>
)

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModalAction())
})

export default connect(null, mapDispatchToProps)(Modal);