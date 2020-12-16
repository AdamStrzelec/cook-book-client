import React from 'react';
import { storiesOf } from '@storybook/react';
import FoundedRecipeItem from './FoundedRecipeItem';


storiesOf('FoundedRecipeItem', module)
    .add('FoundedRecipeItem', ()=>
            <FoundedRecipeItem
                id={'asdsadsad'}
                name={'jajecznica z cebulą i boczkiem'}
                image={'http://localhost:4000/uploads/9ij-y1h-qxso-header-image.jpg'}
                type={'deser'}
                grade={3.5}
             />     
    )