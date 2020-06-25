const initialState = {
    lastAdded: [
        {
            id: '123',
            image: 'https://static.gotujmy.pl/ZDJECIE_PRZEPISU_ETAP/pierogi-z-borowkami-366001.jpg',
            name: 'pierogi z borowkami',
            description: 'bardzo dobre pierogi',
            grade: 3.9,
            type: 'Deser'
        },
        {
            id: '4567',
            image: 'https://static.gotujmy.pl/ZDJECIE_PRZEPISU_ETAP/pierogi-z-borowkami-366001.jpg',
            name: 'pierogi z truskawkami',
            description: 'jeszcze lepsze pierogi',
            grade: 4.2,
            type: 'Deser'
        },
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LAST_ADDED':
            return {...state, ...state.lastAdded[action.payload]};
        default: 
            return state;
    }
}

export default rootReducer;