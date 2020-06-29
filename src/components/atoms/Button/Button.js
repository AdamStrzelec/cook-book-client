import styled, { css } from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    height: 35px;
    padding: 0 10px;
    outline: none;
    font-size: 1.4rem;

    ${props => props.primary && css`
        /* background-color: rgb(0, 164, 164); */
        background-color: rgb(98, 98, 98);
        border: none;
        color: white;
        font-family: 'Roboto' sans-serif;
        letter-spacing: 1px;
        border-radius: 3px;
        position: relative;
        overflow: hidden;
        
        &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 6px;
            background-color: rgb(68, 68, 68);
        }
    `}

    ${props => props.type === 'login' && css`
        background-color: transparent;
        color: white;
        border: 2px solid white;
        margin: 0 0 10px 0;
        height: 50px;
        @media (min-width: 768px){
            border-radius: 10px;
            margin: 0;
            height: 35px;
        }
    `}

    ${props => props.type === 'register' && css`
        border: none;
        height: 50px;
        @media (min-width: 768px){
            border-radius: 10px;
            height: 35px;
        }
    `}
`

export default Button;