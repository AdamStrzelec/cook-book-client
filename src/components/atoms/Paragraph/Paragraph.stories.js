import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';


// export const Panel = () => <GreetingPanel />
storiesOf('Paragraph', module)
    .add('Paragraph', ()=><Paragraph>Lorem ipsum dolor sit amet</Paragraph>)