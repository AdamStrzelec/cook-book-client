import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Header from '../components/atoms/Header/Header';

const Error = () => (
    <MainTemplate>
        <Header style={{textAlign: 'center', marginTop: '150px'}}>Taka podstrona nie istnieje</Header>
        <Header style={{textAlign: 'center', marginTop: '50px'}} subheader>Error: 403</Header>
    </MainTemplate>
)

export default Error;