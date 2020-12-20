import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import getPagesCount from '../../../utils/GetPagesCount';

const Wrapper = styled.div`
    width: 100%;
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledButton = styled(Button)`
    min-width: 30px;
    text-align: center;
    margin: 0 2px;
    font-size: 1.1rem;
    font-weight: bold;
`

class Pagination extends Component{

    state = {
        pageNumber: 1
    }

    componentDidMount(){
        this.setPageNumber()
    }

    componentDidUpdate(prevProps){
        if(prevProps.pageNumber!==this.props.pageNumber){
            this.setPageNumber()
        }
    }
    
    setPageNumber(){
        if(this.props.pageNumber!==undefined){         
            this.setState({pageNumber: this.props.pageNumber});        
        }else{
            this.setState({pageNumber: 1});
        }
    }

    render(){
        let pagesCount = getPagesCount(this.props.itemsCount, this.props.perPage);
        const buttonsArray = [];
        const { pageNumber } = this.state;
        if(pagesCount<=9 || pageNumber<5){
            if(pagesCount>9)pagesCount=9;
            for(let i=0; i<pagesCount; i++){
                buttonsArray.push(i+1);
            }
        }else{
            if(this.props.pageNumber>=5){
                if(pageNumber<pagesCount-5){
                    for(let i=pageNumber-5; i<pageNumber+5; i++){
                        buttonsArray.push(i+1);
                    }  
                }else{
                    for(let i=pageNumber-5; i<pageNumber+pagesCount-pageNumber; i++){
                        buttonsArray.push(i+1);
                    }
                }
            }
        }


        return(
            <Wrapper>
                {
                    buttonsArray.map(button => (
                        this.state.pageNumber==button ?
                        <Link key={button} to={'/recipes/page/'+button+this.props.search}><StyledButton primary>{button}</StyledButton></Link> :
                        <Link key={button} to={'/recipes/page/'+button+this.props.search}><StyledButton tertiary>{button}</StyledButton></Link>
                    ))
                }
            </Wrapper>
        )
    }
}

export default Pagination;