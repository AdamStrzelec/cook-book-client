import React from 'react';
import './input.css';

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
                <input autoComplete="new-password" className='input' onChange={(e)=>{this.setValue(e)}} type={type} name={placeholder}/>
                <label className={inputValue.length>0 ? 'isLabelFocused' : ''} htmlFor={placeholder}>{placeholder}</label>
            </div>
        )
    }

}

export default Input;