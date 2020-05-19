import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import image1 from '../../../images/carousel1.jpg'
import image2 from '../../../images/carousel2.jpg'
import image3 from '../../../images/carousel3.jpg'
import image4 from '../../../images/carousel4.jpg'
import image5 from '../../../images/carousel5.jpg'
import CarouselImage from './CarouselImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CarouselWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
`
const ButtonWrapper = styled.div`
    @media (min-width: 768px){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media (max-width: 768px){
        display: none;
    }
`
const SetImageButton = styled.button`
    cursor: pointer;
    color: white;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    &:hover{
        opacity: 1;
    }
`

const SetImagePanelWrapper = styled.div`
    @media (min-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 50px;
        bottom: 0;
        left: 0;
        z-index: 100;
    }

    @media (max-width: 768px){
        display: none;
    }

`
const SetImagePanelButton = styled.button`
    cursor: pointer;
    position: relative;
    margin: 10px;
    width: 60px;
    height: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    &:before{
        width: 60px;
        height: 8px;
        content: '';
        position: absolute;
        top: 6px;
        left: 0;
        background-color: white;
        opacity: 0.5;
        box-shadow: 0 0 2px 1px white;
        transition-property: background-color, opacity, box-shadow;
        transition-duration: 0.5s;
        ${props => props.buttonNr===props.currentImgNr && css`
            background-color: gold;
            opacity: 1;
            box-shadow: 0 0 4px 2px gold;
        `}
    }
`

const Carousel = () => {
    const images = [image1, image2, image3, image4, image5];
    const [imageNumber, setImageNumber] = useState(Math.floor(Math.random()*5));
    useEffect(()=>{
        const interval = setInterval(()=>nextImage(), 5000)
        return () => {clearInterval(interval)};
    })

    const nextImage = () => {
        if(imageNumber>=4)setImageNumber(0)
        else setImageNumber(imageNumber => imageNumber + 1)  
    }

    const prevImage = () => {
        if(imageNumber === 0)setImageNumber(4)
        else setImageNumber(imageNumber => imageNumber - 1)
    }
    return(
    <CarouselWrapper>
        {images.map((image, i)=>(
            <CarouselImage key={i} image={image} imageNumber={i} currentImageNumber={imageNumber}/>
        ))}

        <ButtonWrapper>
            <SetImageButton onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} size={'3x'}/>
            </SetImageButton>
            <SetImageButton onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} size={'3x'}/>
            </SetImageButton>
        </ButtonWrapper>

        <SetImagePanelWrapper>
            {images.map((image, i)=>(
                <SetImagePanelButton key={i} onClick={()=>{setImageNumber(i)}} buttonNr={i} currentImgNr={imageNumber}/>
            ))}
        </SetImagePanelWrapper>
    </CarouselWrapper>
    )
}

export default Carousel;