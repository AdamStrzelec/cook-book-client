import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export default Cmp => {
    return class extends Component {
        state = {
            isFocused: false,
        }
        componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, true);
        }
        
        componentWillUnmount() {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
        
        handleClickOutside = event => {
            const domNode = ReactDOM.findDOMNode(this);
            // const domNode = this.domNode.current;
        
            if (!domNode || !domNode.contains(event.target)) {
                this.setState({
                    isFocused: false
                });
            }
        }

        render(){
            return <ComponentWrapper
                    ref={this.domNode}
                    onClick={()=>this.setState({isFocused: true})}>
                        <Cmp {...this.props} isFocused={this.state.isFocused}/>
                    </ComponentWrapper>
 
        }
    }
}