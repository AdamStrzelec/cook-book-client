import React from 'react';
import { storiesOf } from '@storybook/react';
import Grade from './Grade';


storiesOf('Grade', module)
    .add('grade', ()=>
            <Grade grade={4.59} isGradeNumberVisible/>     
    )