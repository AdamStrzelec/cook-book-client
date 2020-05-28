import styled, { css } from 'styled-components';

 const Header = styled.h1`
    font-weight: 300;
    font-size: 28px;
    margin: 0;

    ${props => props.subheader && css`
        font-size: 18px;
        font-weight: 600;
        color: #454140;
    `}
 `

export default Header;