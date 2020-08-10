import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Input from '../components/atoms/Input/Input';
import Select from '../components/atoms/Select/Select';
import Button from '../components/atoms/Button/Button';
import Header from '../components/atoms/Header/Header';
import AddIngredientPanel from '../components/molecules/AddingIngredientPanel/AddingIngredientPanel';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Ingredient from '../components/atoms/Ingredient/Ingredient';
import isArrayContainProperty from '../utils/isArrayContainProperty';
import { addRecie } from '../api';

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 70px;
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
        ingredients: [],
        recipeImg: '',
        redirect: false,
        addedRecipeId: ''
    }
    componentDidMount(){
        if(localStorage.getItem('token').length===0){
            this.setState({redirect: true});
        }
    }
    addIngredient(addedIngredient){
        if(!isArrayContainProperty('ingredient', addedIngredient, this.state.ingredients)){
            this.setState({ingredients: [...this.state.ingredients, ...[addedIngredient]]})
        }else{
            //to do handle existing ingredient
        }
       
    }
    deleteIngredient(ingredient){
        this.setState({ingredients: this.state.ingredients.filter(value => value.name !== ingredient.name)})
    }
    onFileChange(e){
        this.setState({ recipeImg: e.target.files[0] })
    }
    isDataValidable(){
        const { name, recipeType, prepareDescription, ingredients, recipeImg } = this.state;
        return name.length>0 && recipeType.length>0 && prepareDescription.length>0 && ingredients.length>0 && recipeImg!=='';
    }
    onSubmit(e){
        e.preventDefault();
        const recipe = {
            name: this.state.name,
            type: this.state.recipeType,
            description: this.state.description,
            ingredients: [...this.state.ingredients],
            preparationDescription: this.state.prepareDescription
        }
        const formData = new FormData();
        formData.set('recipe', JSON.stringify(recipe));
        formData.append('recipeImg', this.state.recipeImg)
        if(this.isDataValidable()){
            addRecie(formData)
            .then(response => {
                this.setState({
                    redirect: true,
                    addedRecipeId: response.data.recipeId
                })
            })
            .catch(err => {
                console.log(err.response)
            })
        }
    }

    render(){
        return(
            <MainTemplate>
                {this.state.redirect && this.state.addedRecipeId.length>0 && <Redirect to={'/recipe/'+this.state.addedRecipeId} />}
                {this.state.redirect && this.state.addedRecipeId==='' && <Redirect to={'/'} />}
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
                        <input type="file" name='file' onChange={(e) => this.onFileChange(e)}/>
                    </InputWrapper>
                    <InputWrapper right>
                        <Button primary onClick={(e)=>this.onSubmit(e)}>Dodaj przepis</Button>
                    </InputWrapper>
                </Wrapper>
                
            </MainTemplate>
        )
    }
}

export default AddRecipe;
