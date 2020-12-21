import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import styled from 'styled-components';
import Grade from '../../atoms/Grade/Grade';
import { recipeTypeStringReplaceCharacters } from '../../../utils/recipeTypeStringReplaceCharacters';

const Wrapper = styled.div`
    width: 90%;
    min-width: 250px;
    height: 130px;
    margin: 10px auto;
    border-radius: 11px;
    overflow: hidden;
    box-shadow: 0 0 10px black;
    
    @media (min-width: 576px){
        height: 130px;
        width: 85%;
    }
`
const LinkWrapper = styled(Link)`
    display: flex;
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
`
const ImageWrapper = styled.div`
    min-width: 120px;
    background-image: url(${props=>props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    @media (min-width: 576px){
        min-width: 180px;
    }
`
const ContentWrapper = styled.div`
    width: calc(100% - 120px);
    background-color: #f0f0f0;
    @media (min-width: 576px){
        width: calc(100% - 180px);
    }
`
const Header = styled.h1`
    margin: 0;
    font-size: 1.9rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media (min-width: 576px){
        font-size: 1.9rem;
    }
`
const StyledItemHeader = styled.div`
    width: 100%;
    height: 30px;
    padding: 4px 10px;
`
const StyledItemDescription = styled.div`
    width: 100%;
    height: 60px;
    padding: 3px 10px 3px 10px;
`
const StyledItemFooter = styled.div`
    width: 100%;
    height: 40px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const Paragraph = styled.p`
    font-size: 1.3rem;
    margin: 0;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media (min-width: 576px){
        font-size: 1.3rem;
    }
`
const RecipeType = styled.p`
    font-size: 1.3rem;
    margin: 0;
`
const RecipeTypeSpan = styled.span`
    font-weight: 600;
`

class RecipeItem extends React.Component {

    render(){
        const { id, image, name, description, grade, type } = this.props;

        return(
            
            <Wrapper onClick={() => this.setState({redirect: true})}>
                <LinkWrapper to={'/recipe/'+id}>
                    <ImageWrapper image={image}>
                        
                    </ImageWrapper>
                    <ContentWrapper>
                        <StyledItemHeader>
                            <Header>
                                {name}
                            </Header>
                        </StyledItemHeader>
                        <StyledItemDescription>
                            <Paragraph>
                                {description}
                            </Paragraph>
                        </StyledItemDescription>
                        <StyledItemFooter>
                            <RecipeType><RecipeTypeSpan>Typ: </RecipeTypeSpan>{recipeTypeStringReplaceCharacters(type)}</RecipeType>
                            <Grade grade={grade} isGradeNumberVisible/>
                        </StyledItemFooter>
                    </ContentWrapper> 
                </LinkWrapper>
            </Wrapper>
        )
    }
}

RecipeItem.propType = { 
    id: PropType.string.isRequired,
    image: PropType.string.isRequired,
    name: PropType.string.isRequired, 
    description: PropType.string.isRequired, 
    grade: PropType.number.isRequired, 
    type: PropType.string.isRequired,
}

export default RecipeItem;