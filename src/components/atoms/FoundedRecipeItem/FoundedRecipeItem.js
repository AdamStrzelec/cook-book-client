import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Grade from '../Grade/Grade';
import Paragraph from '../Paragraph/Paragraph';

const Wrapper = styled.div`
    background-color: #f0f0f0;
    width: 100%;
    height: 50px;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    margin-top: 3px;
    text-decoration: none;
`
const Image = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`
const Name = styled(Paragraph)`
    font-weight: bold;
    font-size: 14px;
    /* text-decoration: underline; */
    color: #3e4444;
`
const Type = styled(Paragraph)`
    font-size: 14px;
    color: #3e4444;
`
const TypeSpan = styled.span`
    font-weight: bold;
`
const Info = styled.div`
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const GredeWrapper = styled.div`
    position: absolute;
    right: 5px;
    bottom: 18px;
    width: 60px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
const FoundedRecipeItem = ({ id, name, type, image, averageRate }) => (
    <>
        <StyledLink to={'/recipe/'+id}>
            <Wrapper>
                
                    <Image image = {image}/>
                    <Info>
                        <Name>{name}</Name>
                        <Type>Typ: <TypeSpan>{type}</TypeSpan></Type>
                        <GredeWrapper>
                            <Grade grade={averageRate} size={10} isGradeNumberVisible={false}/>
                        </GredeWrapper>
                    </Info>
                
            </Wrapper>
        </StyledLink>
    </>
)

export default FoundedRecipeItem;