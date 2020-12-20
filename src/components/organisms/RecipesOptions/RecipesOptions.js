import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import Header from '../../atoms/Header/Header';
import { Checkbox, Label } from '../../atoms/RecipeOptionType/RecipeOptionType';
import { setRecipesOptions as setRecipesOptionsAction } from '../../../actions';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #3b3a30;
    @media(max-width: 768px){
        padding-top: 50px;
    }
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
        isSearchOptionsQuery: false,
        forceSubmit: false
    }

    componentDidUpdate(prevProps){
        if(prevProps.search!==this.props.search && this.props.search.length===0){
            this.setState({forceSubmit: true});
        }
    }
    
    setForceSubmit(){
        this.props.setRecipesOptions([])
        this.setState({forceSubmit: false})
    }
    render(){
        const { setRecipesOptions, recipesOptionsByQuery } = this.props;
        
        return(
            <Wrapper>
                <Formik
                    initialValues={{
                        all: recipesOptionsByQuery.length > 0 ? false : true,
                        checked: recipesOptionsByQuery
                    }}
                    onSubmit={async values => {
                        if(values.all){
                            values.checked = [];
                        }
                        if(values.checked.length===0)values.all=true
                            setRecipesOptions(values.checked);
                            this.setState({checked: values.checked, forceSubmit: false});
                    }}
                >
                    {({ values, submitForm }) => (
                    <StyledForm onChange={()=> submitForm()}>
                        {this.state.forceSubmit ? values.checked = [] : null}
                        {this.state.forceSubmit ? values.all = true : null}
                        {this.state.forceSubmit ? this.setForceSubmit() : null}
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

const mapStateToProps = state => ({
    recipesOptions: state.recipesOptions
})

const mapDispatchToProps = dispatch => ({
    setRecipesOptions: (recipesOptions) => dispatch(setRecipesOptionsAction(recipesOptions))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesOptions);
