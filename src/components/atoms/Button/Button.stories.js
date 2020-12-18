import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';


storiesOf('Button', module)
    .add('primary', ()=>
        <Button primary>button</Button>     
    )
    .add('secondary', ()=>
        <Button secondary>button</Button>     
    )
    .add('tertiary', ()=>
        <Button tertiary>button</Button>     
    )