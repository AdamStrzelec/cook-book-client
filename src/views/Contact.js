import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import Header from '../components/atoms/Header/Header';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 50px;
`
const StyledHeader = styled(Header)`
    font-size: 2.3rem;
    margin-top: 20px;
`
const Span = styled.span`
    font-weight: bold;
    color: #808B96;
`

const Contact = () => (
    <MainTemplate>
        <Wrapper>
            <StyledHeader>
                <Span>Telefon:</Span> 123-456-789
            </StyledHeader>
            <StyledHeader>
                <Span>E-mail:</Span> cookbook@gmail.com
            </StyledHeader>
            <StyledHeader>
                <Span>Facebook:</Span> facebook.com/cookbook
            </StyledHeader>
            <StyledHeader>
                <Span>Instagram:</Span> instagram.com/cookbook
            </StyledHeader>
        </Wrapper>
    </MainTemplate>
)

export default Contact;