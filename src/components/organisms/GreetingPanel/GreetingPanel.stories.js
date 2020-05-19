import React from 'react';
import { storiesOf } from '@storybook/react';
import GreetingPanel from './GreetingPanel';


// export const Panel = () => <GreetingPanel />
storiesOf('Greeting panel', module)
    .add('panel', ()=><GreetingPanel />)