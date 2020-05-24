import React from 'react';
import { storiesOf } from '@storybook/react';
import ToggleButton from './ToggleButton';


// export const Panel = () => <GreetingPanel />
storiesOf('Toggle button', module)
    .add('toggle button', ()=><ToggleButton />)