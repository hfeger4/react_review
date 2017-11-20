//state argument is not application state,
//only the state the reducer is responsible for.

export default function(state = null, action){
  //set state to null so that undefined is not return when the app is initally
  // started
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
