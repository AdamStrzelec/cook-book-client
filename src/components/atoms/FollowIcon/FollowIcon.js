import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccountNameWrapper = styled.div`
    width: 250px;
    height: 55px;
    display: flex;
    align-items: center;
    position: absolute;
    top: -3px;
    left: -3px;
    overflow: hidden;
    border-radius: 45px;
    transition: all 0.5s ease-in-out;
    transform: translateX(-250px);
    pointer-events: none;
`
const AccountNameHideContainer = styled.div`
    position: relative;
    top: 0;
    left: -195px;
    width: 300px;
    height: 55px;
    box-shadow: 0 0 0 300px rgba(255, 255, 255, 0.7);
    border-radius: 45px;
    transition: all 0.5s ease-in-out;
    transform: translateX(250px);
`
const AccountName = styled.p`
    position: absolute;
    top: 2px;
    right: 30px;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(1,.02,.94,-0.13);
    color: rgb(100, 100, 100);
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
`
const Icon = styled(FontAwesomeIcon)`
    opacity: 0.7;
    color: white;
    transition: opacity 0.5s ease-in-out;
`
const ContentWrapper = styled.div`
    position: absolute;
    top: 3px;
    width: 50px;
    height: 50px;
    &:hover ${Icon}{
        opacity: 1;
    }
    &:hover ${AccountName}{
        opacity: 1;
    }
    &:hover ${AccountNameWrapper}{
        transform: translateX(0);
    }
    &:hover ${AccountNameHideContainer}{
        transform: translateX(0);
    }

`
const Wrapper = styled.div`
    width: 300px;
    height: 55px;
    position: relative;
    overflow: hidden;
`

const FollowIcon = ({ icon, accountUrl, accountName}) => (
        <Wrapper>
            <ContentWrapper>
                <a href={accountUrl} target='blanc'>
                    <Icon icon={icon} size='3x'/>
                    <AccountNameWrapper>
                        <AccountNameHideContainer />
                        <AccountName>{accountName}</AccountName>
                    </AccountNameWrapper>
                </a>
            </ContentWrapper>
        </Wrapper>  
)

FollowIcon.protoTypes = {
    icon: PropTypes.object.isRequired,
    accountUrl: PropTypes.string.isRequired,
    accountName: PropTypes.string.isRequired
}

export default FollowIcon;