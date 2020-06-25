import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import GreetingPanel from '../components/organisms/GreetingPanel/GreetingPanel';
import RecipeItem from '../components/molecules/RecipeIcon/RecipeItem';

const Home = () => (
    <MainTemplate>
        <GreetingPanel />
        <RecipeItem
        id={'123'}
        image={'https://static.gotujmy.pl/ZDJECIE_PRZEPISU_ETAP/pierogi-z-borowkami-366001.jpg'}
        name={'pierogi z browkami'}
        description={'bardzo dobre pierogi'}
        grade={3.9}
        type={'Deser'}
    />
    </MainTemplate>
)

export default Home;
