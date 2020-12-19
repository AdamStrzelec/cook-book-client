import React from 'react';
import { storiesOf } from '@storybook/react';
import AddRatePanel from './AddRatePanel';


// export const Panel = () => <GreetingPanel />
storiesOf('AddRatePanel', module)
    .add('panel', ()=><AddRatePanel />)