import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import getPercentageGrade from '../../../utils/CalculateGrade';

const Wrapper = styled.div`
    position: relative;
    font-size: ${props => props.size ? props.size+'px' : '14px'};
`
const Star = styled(FontAwesomeIcon)`
    color: ${props => props.color};
`
const StarsHideWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`
const StarsWrapper = styled.div`
    position: relative;
`
const GradeNumber = styled.p`
    margin: 0 0 0 85px;
    color: gray;
    font-size: 1.5rem;
    font-weight: 600;
    display: ${props => props.isGradeNumberVisible ? 'block' : 'none'};
`

const Grade = ({ grade, size, isGradeNumberVisible }) => (

    <Wrapper size={size}>
        <StarsHideWrapper style={{transform: 'translateX('+getPercentageGrade(grade)+'%)'}}>
            <StarsWrapper style={{transform: 'translateX(-'+getPercentageGrade(grade)+'%)'}}>
                <Star icon={faStar} color={'gray'} />
                <Star icon={faStar} color={'gray'} />
                <Star icon={faStar} color={'gray'} />
                <Star icon={faStar} color={'gray'} />
                <Star icon={faStar} color={'gray'} />
            </StarsWrapper>
        </StarsHideWrapper>
        <StarsHideWrapper style={{transform: 'translateX(-'+(100-getPercentageGrade(grade))+'%)'}}>
            <StarsWrapper style={{transform: 'translateX('+(100-getPercentageGrade(grade))+'%)'}}>
                <Star icon={faStar} color={'orange'} />
                <Star icon={faStar} color={'orange'} />
                <Star icon={faStar} color={'orange'} />
                <Star icon={faStar} color={'orange'} />
                <Star icon={faStar} color={'orange'} />
            </StarsWrapper>
        </StarsHideWrapper>
        <GradeNumber isGradeNumberVisible={isGradeNumberVisible}>{grade.toString().substring(0,4)} / 5</GradeNumber>
    </Wrapper> 
)

Grade.propTypes = {
    grade: PropType.number.isRequired,
    size: PropType.number,
    isGradeNumberVisible: PropType.bool,
}

export default Grade;
