import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/organisms/Navbar/Navbar';
import SignInPanel from '../components/organisms/SignInPanel/SignInPanel';
import Modal from '../components/organisms/Modal/Modal';
import { connect } from 'react-redux';
import { saveUserParams as saveUserParamsAction } from '../actions';

const StyledWrapper = styled.div`

    @media (min-width: 768px){
        margin-top: 70px;
    }
`

class MainTemplate extends React.Component{

    componentDidMount(){
        if(localStorage.getItem("userID").length>0){
            console.log()
            this.props.saveUserParams();
            // console.log('authenticate user');
            
        }  
    }
    
    render(){

        const { isModalOpen, modalMessage } = this.props;

        return(
            <StyledWrapper>
                <Modal isOpen={isModalOpen} modalMessage={modalMessage}/>
                <Navbar />
                {this.props.children}
                <SignInPanel />
            </StyledWrapper>
        )
    }

}

const mapStateToProps = (state) => ({
    userID: state.userID,
    isModalOpen: state.isModalOpen,
    modalMessage: state.modalMessage
})

const mapDispatchToProps = (dispatch) => ({
    saveUserParams: () => dispatch(saveUserParamsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);