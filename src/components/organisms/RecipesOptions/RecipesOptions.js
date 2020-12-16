import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import Header from '../../atoms/Header/Header';
import { Checkbox, Label } from '../../atoms/RecipeOptionType/RecipeOptionType';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #3b3a30;
`
const OptinsHeader = styled(Header)`
    color: white;
    text-align: center;
    padding: 15px 0;
    font-size: 20px;
`
const StyledForm = styled(Form)`
    padding: 0 10px;
`
const Option = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    margin: 5px 0;
`
class RecipesOptions extends React.Component {

    state = {
        isAllOptionsChecked: true,
        checked: [],
    }
    componentDidMount(){
        console.log(this.props.location);
        console.log(this.props.recipesOptions);
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.checked!==this.state.checked){
            this.props.getRecipesOptions(this.state.checked);
        }
    }
    render(){

        
        return(
            <Wrapper>
                <Formik
                    initialValues={{
                        all: this.props.recipesOptions.length > 0 ? false : true,
                        checked: this.props.recipesOptions
                    }}
                    onSubmit={async values => {
                        if(values.all){
                            values.checked = [];
                        }
                        if(values.checked.length===0)values.all=true
                        this.setState({checked: values.checked, isAllOptionsChecked: values.all});
                    }}
                >
                    {({ values, submitForm }) => (
                    <StyledForm onChange={()=> submitForm()}>
                        <OptinsHeader>Wybierz typ potrawy</OptinsHeader>
                        <div role="group" aria-labelledby="checkbox-group">
                            <Option>
                                <Checkbox as={Field} type="checkbox" name="all" value="all" checked={values.all}/>
                                <Label>Wszystkie</Label>
                            </Option>
                            <Option>
                                <Checkbox as={Field} type="checkbox" name="checked" value="daniewytrawne" onClick={()=>{values.all=false}}/>
                                <Label>Dania wytrawne</Label>
                            </Option>
                            <Option>
                                <Checkbox as={Field} type="checkbox" name="checked" value="deser" onClick={()=>{values.all=false}}/>
                                <Label>Desery</Label>
                            </Option>
                            <Option>
                                <Checkbox as={Field} type="checkbox" name="checked" value="zupa" onClick={()=>{values.all=false}}/>
                                <Label>Zupy</Label>
                            </Option>
                            <Option>
                                <Checkbox as={Field} type="checkbox" name="checked" value="przystawka" onClick={()=>{values.all=false}}/>
                                <Label>Przystawki</Label>
                            </Option>
                        </div>
                    </StyledForm>
                    )}
                </Formik>
            </Wrapper>
        )
    }
}

export default RecipesOptions;
