import React from 'react';
import styled from 'styled-components';
import Carousel from './Carusel';
import logo from '../../../images/logo.png';
import FollowIcon from '../../atoms/FollowIcon/FollowIcon';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const PanelWrapper = styled.div`
    background-color: black;
    width: 100%;
    height: 60vh;
    min-height: 370px;
    @media (max-width: 576px){
        height: 100vh;
    }
    position: relative;
`
const PanelContentWrapper = styled.div`
    z-index: 100;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* color: white; */
`
const LogoWrapper = styled.div`
    position: relative;
    top: 100px;
    width: 100%;
    height: 90px;
    @media (max-width: 576px){
        top: 150px;
    }
    @media (max-width: 768px){
        height: 80px;
    }
    @media (max-width: 425px){
        height: 60px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`
const Logo = styled.img`
    width: auto;
    height: 100%;
`
const InfoWrapper = styled.div`
    position: relative;
    top: 180px;
    color: white;
    width: 100%;
    text-align: center;
    @media (max-width: 576px){
        top: 320px;
    }
`

const Info = styled.h1`
    margin: 0;
    padding: 0 40px;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: 1px;
    @media (max-width: 768px){
        font-size: 2rem;
    }
    @media (max-width: 425px){
        font-size: 1.6rem;
    }
`
const MediaWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 60px;
    height: 120px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`

const GreetingPanel = () => (
    <PanelWrapper>
        <Carousel />
        <PanelContentWrapper>
            <LogoWrapper><Logo src={logo} alt='logo'/></LogoWrapper>
            <InfoWrapper>
                <Info>Wybierz swój idelany przepis lub podziel się własnym</Info>
            </InfoWrapper>
        </PanelContentWrapper>
        <MediaWrapper>
            <FollowIcon icon={faFacebook} accountUrl={'https://www.facebook.com/'} accountName='/adam.strzelec1'/>
            <FollowIcon icon={faGithub} accountUrl={'https://github.com/'} accountName='/adamstrzelec'/>
        </MediaWrapper>
    </PanelWrapper>
)

export default GreetingPanel;