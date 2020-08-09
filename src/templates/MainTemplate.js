import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/organisms/Navbar/Navbar';
import SignInPanel from '../components/organisms/SignInPanel/SignInPanel';
import { connect } from 'react-redux';
import { authenticateUser as authenticateUserAction } from '../actions';

const StyledWrapper = styled.div`

    @media (min-width: 768px){
        margin-top: 70px;
    }
`

class MainTemplate extends React.Component{

    componentDidMount(){
        if(localStorage.getItem("userID").length>0){
            this.props.authenticateUser();
        }  
    }
    
    render(){

        return(
            <StyledWrapper>
                <Navbar />
                {this.props.children}
                <SignInPanel />
            </StyledWrapper>
        )
    }

}

const mapStateToProps = (state) => ({
    userID: state.userID
})

const mapDispatchToProps = (dispatch) => ({
    authenticateUser: () => (dispatch(authenticateUserAction))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);