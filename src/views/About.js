import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import Header from '../components/atoms/Header/Header';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 50px;
`
const StyledHeader = styled(Header)`
    text-align: center;
`
const StyledParagraph = styled(Paragraph)`
    text-align: center;
    margin-top: 30px;
`

const About = () => (
    <MainTemplate>
        <Wrapper>
            <StyledHeader>Witaj na naszej strone</StyledHeader>
            <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum elementum justo, sed fringilla enim scelerisque eget. Fusce ultrices pretium ante, sit amet congue mi gravida sit amet. Fusce gravida consequat arcu eu suscipit. Proin placerat vitae metus vitae vehicula. Proin ipsum ante, mollis vel dignissim vel, tincidunt in nibh. Quisque lectus elit, iaculis in felis et, ultrices aliquet ligula. Aliquam vestibulum lectus nunc, eu gravida leo finibus vulputate. Nulla libero tortor, tristique id lacus a, mollis vehicula eros. Aliquam eu leo quis neque volutpat eleifend. Quisque vitae viverra dolor.
            </StyledParagraph>
            <StyledParagraph>
                Vestibulum vehicula velit leo, in pulvinar libero ultrices ut. Duis egestas a lorem quis commodo. Praesent euismod velit vitae nulla egestas, vel tristique augue fringilla. Vestibulum ante dolor, dignissim eu dui congue, ultricies condimentum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum non massa sit amet magna semper pulvinar. Nullam nec dui feugiat, pellentesque nisi eu.
            </StyledParagraph>
        </Wrapper>
    </MainTemplate>
)

export default About;