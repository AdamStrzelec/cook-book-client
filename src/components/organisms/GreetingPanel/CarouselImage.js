import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import imageMobile from '../../../images/carousel2.jpg';

const moveImage = keyframes`
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
`
const hideOnLeft = keyframes`
    to{
        transform: translateX(-100%)
    }
`
const hideOnRight = keyframes`
    to{
        transform: translateX(100%)
    }
`

const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    @media (min-width: 768px){
        background-image: url(${props => props.image});

        ${props => props.imageNumber>props.currentImageNumber && css`
            animation: ${hideOnRight} 0.5s;
            animation-fill-mode: forwards;
        `}
        ${props => props.imageNumber<props.currentImageNumber && css`
            animation: ${hideOnLeft} 0.5s;
            animation-fill-mode: forwards;
        `}
        
        ${props => props.imageNumber===props.currentImageNumber && css`
            z-index: 10;
            animation: ${moveImage} 0.5s ease-in-out;
            animation-fill-mode: forwards;
        `} 
    }
    @media (max-width: 768px){
        background-image: url(${props => props.imageMobile});
    }
    &:before{
        content: '';
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`

const CarouselImage = ({image, imageNumber, currentImageNumber}) => (
    <ImageWrapper 
        image={image} 
        imageMobile={imageMobile}
        imageNumber={imageNumber} 
        currentImageNumber={currentImageNumber}
    />
)

export default CarouselImage;