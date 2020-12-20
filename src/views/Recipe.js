import React, { Component } from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import { getRecipeById } from '../api';
import { connect } from 'react-redux';
import Header from '../components/atoms/Header/Header';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import AddRatePanel from '../components/organisms/AddRatePanel/AddRatePanel';
import Button from '../components/atoms/Button/Button';
import { addRateForRecipe } from '../api';
import { openModal as openModalAction } from '../actions';


const Wrapper = styled.div`
    width: 100%;
    /* display: flex;
    justify-content: center; */
    @media(max-width: 767px){
        flex-direction: column;
        justify-content: center;
        color: #273746;
    }

`
const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const ImageWrapper = styled.div`
    
    width: 80%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    @media(min-width: 768px){
        
        width: 45%;
        height: 400px;
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    @media(min-width: 768px){
        object-fit: cover;
    }
`
const StyledHeader = styled(Header)`
    font-size: 2.4rem;
    margin-top: 25px;
    @media(min-width: 768px){
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media(max-width: 767px){
        text-align: center;
    }
`
const StyledParagraph = styled(Paragraph)`
    font-size: 1.4rem;
    margin-top: 10px;
    margin-bottom: 10px;
    @media(max-width: 767px){
        text-align: center;
    }
    @media(min-width: 768px){
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
    }
`
const IngredientParagraph = styled(Paragraph)`
    text-align: center;
    margin-top: 10px;
    font-size: 1.5rem;
`
const Span = styled.span`
    font-weight: bold;
`
const StyledButton = styled(Button)`
    width: 150px;
    margin: 0px auto 30px auto;
`
const InfoWrapper = styled.div`
    width: 45%;
    position: relative;
    @media(max-width: 767px){
        display: none;
    }

`
const OwnerWrapper = styled.div`
    position: absolute;
    left: 10px;
    bottom: 130px;
`
const TypeWrapper = styled.div`
    position: absolute;
    left: 10px;
    bottom: 110px;
`
const GradeWrapper = styled.div`
    position: absolute;
    left: 10px;
    bottom: 90px;
`
const AddGradeWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 10px;
`
const PrepareInfoWrapper = styled.div`

`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(min-width: 767px){
        display: none;
    }
`

class Recipe extends Component{

    state = {
        recipeName: '',
        imagePath: '',
        owner: '',
        description: '',
        preparationDescription: '',
        averageRate: 0,
        type: '',
        ingredients: [],
        dataLoaded: false,
        addedRate: 0
    }

    componentDidMount(){
        getRecipeById(this.props.match.params.id)
            .then(response => {
                this.setState({
                    recipeName: response.data.recipe.name,
                    imagePath: response.data.recipe.imagePath,
                    owner: response.data.recipe.ownerNick,
                    description: response.data.recipe.description,
                    preparationDescription: response.data.recipe.preparationDescription,
                    averageRate: response.data.recipe.averageRate,
                    type: response.data.recipe.type,
                    ingredients: response.data.recipe.ingredients,
                    dataLoaded: true
                })
            })
    }
    addRate(){
        if(this.state.addedRate>0){
            addRateForRecipe(this.props.match.params.id, this.state.addedRate)
            .then(() => {
                this.props.openModal('Dodano pomyślnie ocenę dla przepisu');
            })
            .catch(err => {
                this.props.openModal(err.response.data.message);
            })
        }else{
            this.props.openModal('Musisz zaznaczyć ocenę 1-5 aby ją dodać');
        }
    }
    render(){
        const { recipeName, imagePath, owner, description, preparationDescription, averageRate, type, ingredients } = this.state;
        return(
            <MainTemplate>
                <Wrapper>
                    <AboutWrapper>  
                        <ImageWrapper>
                            <Image src={imagePath} />
                        </ImageWrapper>
                        <InfoWrapper>
                            <StyledHeader>{recipeName.charAt(0).toUpperCase()+recipeName.slice(1)}</StyledHeader>
                            <StyledParagraph>{description}</StyledParagraph>
                            <OwnerWrapper>
                                <StyledParagraph><Span>Dodany przez: </Span>{owner}</StyledParagraph>
                            </OwnerWrapper>
                            <TypeWrapper>
                                <StyledParagraph>
                                    <Span>Typ potrawy: </Span>{type.charAt(0).toUpperCase()+type.slice(1)}
                                </StyledParagraph>
                            </TypeWrapper>
                            <GradeWrapper>
                                <StyledParagraph>
                                    <Span>Średnia ocena: </Span>{averageRate} / 5
                                </StyledParagraph>
                            </GradeWrapper>
                            <AddGradeWrapper>
                            {this.props.userID.length>0 ? 
                                <>
                                    <StyledParagraph style={{marginBottom: 0}}>Dodaj ocene: </StyledParagraph>
                                    <AddRatePanel setAddedRate = {(rate)=>this.setState({addedRate: rate})}/>
                                    <StyledButton primary onClick={()=>this.addRate()} style={{marginBottom: 0, marginLeft: '5px'}}>
                                        Oceń przepis
                                    </StyledButton>
                                    </>:
                                    <StyledParagraph>Zaloguj sie aby dodać ocenę</StyledParagraph>
                            }
                            </AddGradeWrapper>
                        </InfoWrapper>

                    </AboutWrapper>
                    <Info>
                        <StyledHeader style={{textAlign: 'center'}}>{recipeName.charAt(0).toUpperCase()+recipeName.slice(1)}</StyledHeader>
                        <StyledParagraph style={{textAlign: 'center'}}>{description}</StyledParagraph>
                    </Info>
                    <PrepareInfoWrapper>

                        <StyledHeader style={{textAlign: 'center', margin: '25px 0 10px 0'}}>Składniki:</StyledHeader>
                        {ingredients.map(ingredient => (
                            <IngredientParagraph key={ingredient.ingredient}>
                                {`${ingredient.ingredient} ${ingredient.sizeValue} ${ingredient.sizeUnit}`}
                            </IngredientParagraph>
                        ))}
                        <StyledHeader style={{textAlign: 'center', margin: '25px 0 10px 0'}}>Sposób przygotowania:</StyledHeader>
                        <StyledParagraph style={{textAlign: 'center', margin: '10px 0'}}>{preparationDescription}</StyledParagraph>
                    </PrepareInfoWrapper>
                    <Info>
                        {this.props.userID.length>0 ? 
                            <>
                                <StyledParagraph style={{marginBottom: 0}}>Dodaj ocene: </StyledParagraph>
                                <AddRatePanel center setAddedRate = {(rate)=>this.setState({addedRate: rate})}/>
                                <StyledButton primary onClick={()=>this.addRate()} style={{marginBottom: '30px'}}>
                                    Oceń przepis
                                </StyledButton>
                                </>:
                                <StyledParagraph>Zaloguj sie aby dodać ocenę</StyledParagraph>
                        }
                    </Info>
                </Wrapper>
            </MainTemplate>
        )
    }
}

const mapStateToProps = state => ({
    userID: state.userID
})
const mapDispatchToProps = dispatch => ({
    openModal: (modalMessage) => dispatch(openModalAction(modalMessage))
})

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
