import React from 'react';
import './input.css';

class Input extends React.Component {
    state = {
        inputValue: '',
    }

    setValue = (e) => {
        this.setState({inputValue: e.target.value});
        // console.log(this.state.value);
    }

    render(){
        const { tag: Tag, type, placeholder, setValue, getValue } = this.props;
        const inputValue = this.state.inputValue;
        return(
            <div className='wrapper'>
                <Tag 
                value={setValue}
                autoComplete="new-password"
                className={Tag==='textarea' ? 'input textarea' : 'input'}
                onChange={(e)=>{this.setValue(e); getValue(e.target.value)}}
                type={type} name={placeholder}/>
                <label className={inputValue.length>0 ? 'isLabelFocused' : ''} htmlFor={placeholder}>{placeholder}</label>
            </div>
        )
    }

}

Input.defaultProps = {
    tag: 'input',
}

export default Input;