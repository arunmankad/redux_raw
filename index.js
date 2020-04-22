const {createStore} = require('redux');

const initialState = {
    sum:21
};
const myReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case "ADD":
            newState.sum += 1;
          return newState;
          break;
        case "SUBTRACT":
            newState.sum -= 1;
          return newState;
          break;
        default:
          // code block
      }
};

const store = createStore(myReducer);

store.subscribe(()=>{
    console.log('state changed', store.getState() );
})

store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'SUBTRACT'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'SUBTRACT'});

 console.log(store.getState());