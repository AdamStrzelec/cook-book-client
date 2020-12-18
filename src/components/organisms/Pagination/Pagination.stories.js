import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './Pagination';


storiesOf('Pagnation', module)
    .add('pagination', ()=>
        <Pagination itemsCount={15} pageNumber={1} perPage={10}/>     
    )