import React from 'react';
import { storiesOf } from '@storybook/react';
import RecipeItem from './RecipeItem';

storiesOf('Recipe item', module)
    .add('Recipe item', ()=><RecipeItem
        id={'123'}
        image={'https://static.gotujmy.pl/ZDJECIE_PRZEPISU_ETAP/pierogi-z-borowkami-366001.jpg'}
        name={'pierogi z browkami'}
        description={'bardzo dobre pierogi'}
        grade={3.9}
        type={'Deser'}
    />)