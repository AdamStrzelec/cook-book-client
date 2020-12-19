import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    
    margin: 8px 0;
`
const GradeButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
`

const AddRatePanel = ({ setAddedRate, center }) => {

    const [grade, setGrade] = useState(0);

    return(
        <Wrapper center>
            <GradeButton onClick={() => {setGrade(1); setAddedRate(1)}}><FontAwesomeIcon icon={faStar} color={grade>=1 ? 'orange' : 'gray'} /></GradeButton>
            <GradeButton onClick={() => {setGrade(2); setAddedRate(2)}}><FontAwesomeIcon icon={faStar} color={grade>=2 ? 'orange' : 'gray'} /></GradeButton>
            <GradeButton onClick={() => {setGrade(3); setAddedRate(3)}}><FontAwesomeIcon icon={faStar} color={grade>=3 ? 'orange' : 'gray'} /></GradeButton>
            <GradeButton onClick={() => {setGrade(4); setAddedRate(4)}}><FontAwesomeIcon icon={faStar} color={grade>=4 ? 'orange' : 'gray'} /></GradeButton>
            <GradeButton onClick={() => {setGrade(5); setAddedRate(5)}}><FontAwesomeIcon icon={faStar} color={grade>=5 ? 'orange' : 'gray'} /></GradeButton>
        </Wrapper>
    )
}
export default AddRatePanel;