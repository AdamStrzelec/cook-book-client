import styled, { css } from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    height: 35px;
    padding: 0 10px;
    outline: none;
    font-size: 1.4rem;

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