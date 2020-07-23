import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Select from '../components/atoms/Select/Select';
import Button from '../components/atoms/Button/Button';
import Header from '../components/atoms/Header/Header';
import AddIngredientPanel from '../components/molecules/AddingIngredientPanel/AddingIngredientPanel';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Ingredient from '../components/atoms/Ingredient/Ingredient';
import isArrayContainProperty from '../utils/isArrayContainProperty';

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 70px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    @media(min-width: 768px){
        width: 750px;
        margin-left: auto;
        margin-right: auto;
    }
`
const InputWrapper = styled.div`
    margin-top: 25px;
    display: flex;
    ${props => props.left && 'justify-content: flex-start'}
    ${props => props.right && 'justify-content: flex-end'}
`
const IngredientsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const IngredientWrapper = styled.div`
    margin-top: 10px;
`

class AddRecipe extends React.Component{

    state = {
        name: '',
        recipeType: '',
        description: '',
        prepareDescription: '',
        addedIngredient: '',
        ingredients: []
    }

    addIngredient(addedIngredient){
        if(!isArrayContainProperty('name', addedIngredient, this.state.ingredients)){
            this.setState({ingredients: [...this.state.ingredients, ...[addedIngredient]]})
        }else{
            //to do handle existing ingredient
        }
       
    }
    deleteIngredient(ingredient){
        this.setState({ingredients: this.state.ingredients.filter(value => value.name !== ingredient.name)})
    }


    render(){
        return(
            <MainTemplate>
                <Wrapper>
                    <Header>Dodaj przepis</Header>
                    <InputWrapper>
                        <Input getValue={name => this.setState({name})} type={'text'} placeholder={'Nazwa Przepisu'}/>
                    </InputWrapper>

                    <InputWrapper>
                        <Select defaultValue="default" onChange={e => this.setState({recipeType: e.target.value})}>
                            <option value="default" disabled hidden>Typ potrawy</option>
                            <option value="deser">Deser</option>
                            <option value="zupa">Zupa</option>
                            <option value="przystawka">Przystawka</option>
                            <option value="daniewytrawne">Danie wytrawne</option>
                        </Select>
                    </InputWrapper>

                    <InputWrapper>
                        
                        <Input tag={'textarea'} placeholder={'Opis przepisu'} getValue={description => this.setState({description})}/>
                    </InputWrapper>

                    <InputWrapper left style={{flexDirection: 'column'}}>
                        <Header subheader>Składniki:</Header>
                        <IngredientsWrapper>
                            {this.state.ingredients.length <= 0 && <Paragraph>Dodaj składniki</Paragraph>}
                            {this.state.ingredients.map((ingredient, index) => 
                                <IngredientWrapper key={index}>
                                    <Ingredient ingredient={ingredient} deleteIngredient={() => this.deleteIngredient(ingredient)}/>
                                </IngredientWrapper>
                            )}
                        </IngredientsWrapper>

                    </InputWrapper>

                    <InputWrapper>
                        <AddIngredientPanel addIngredient={addedIngredient => this.addIngredient(addedIngredient)} />
                    </InputWrapper>

                    <InputWrapper>
                        <Input tag={'textarea'} placeholder={'Opis przygotowania'} getValue={prepareDescription => this.setState({prepareDescription})}/>
                    </InputWrapper>
                    <InputWrapper>
                        <input type="file" name='file'/>
                    </InputWrapper>
                    <InputWrapper right>
                        <Button primary onClick={(e) => {e.preventDefault()}}>Dodaj przepis</Button>
                    </InputWrapper>
                </Wrapper>
                
            </MainTemplate>
        )
    }
}

export default AddRecipe;
