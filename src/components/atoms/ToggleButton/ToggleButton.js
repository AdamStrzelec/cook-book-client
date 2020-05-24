import React from 'react';
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.6);
    position: relative;
    border: 2px solid #454140;
    border-radius: 8px;
    outline: none;
    @media (min-width: 768px){
        display: none;
    }
`
const TopLine = styled.span`
    position: absolute;
    top: 8px;
    left: 3px;
    width: 30px;
    height: 2px;
    background-color: #454140;
    transition: transform 0.3s ease-in-out;
    ${props => props.isMenuOpen && css`   
        transform: translateY(10px) rotate(45deg);
    `}
`
const MidLine = styled.span`
    position: absolute; 
    top: 18px;
    left: 3px;
    width: 30px;
    height: 2px;
    background-color: #454140;
    transition: opacity 0.3s ease-in-out;
    ${props => props.isMenuOpen && css`
        opacity: 0;
    `}
`
const BottomLine = styled.span`
    position: absolute;
    top: 28px;
    left: 3px;
    width: 30px;
    height: 2px;
    background-color: #454140;
    transition: transform 0.3s ease-in-out;
    ${props => props.isMenuOpen && css`
        transform: translateY(-10px) rotate(-45deg);
    `}
    
`

const ToggleButton = ({ isMenuOpen, menuToggle }) => {
    return(
        <StyledButton onClick={()=>{
            menuToggle(!isMenuOpen);
            }}>
            <TopLine isMenuOpen={isMenuOpen}></TopLine>
            <MidLine isMenuOpen={isMenuOpen}></MidLine>
            <BottomLine isMenuOpen={isMenuOpen}></BottomLine>
        </StyledButton>
    )

}

export default ToggleButton;
