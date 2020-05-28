import React from 'react';
import styled from 'styled-components';
import './input.css';

const InputWrapper = styled.div`
    width: 100%;
    position: relative;
`
const StyledLabel = styled.div`
    position: absolute;
    top: -10px;
    left: 5px;
    font-size: 15px;
    font-family: sans-serif;
    color: #454140;
`

const StyledInput = styled.input`
    width: 100%;
    &:focus ${StyledLabel}{
        transform: translateY(10px);
        color: red;
    }
`

class Input extends React.Component {
    state = {
        inputValue: '',
    }

    setValue = (e) => {
        this.setState({inputValue: e.target.value})
    }

    render(){
        const { type, placeholder } = this.props;
        const inputValue = this.state.inputValue;
        return(
            <div className='wrapper'>
                <input className='input' onChange={(e)=>{this.setValue(e)}} type={type} name={placeholder}/>
                <label className={inputValue.length>0 ? 'isLabelFocused' : ''} htmlFor={placeholder}>{placeholder}</label>
            </div>
        )
    }

}

export default Input;