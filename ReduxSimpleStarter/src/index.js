import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDalHtnKREbLdDrhShX3afAWSZaI5AqJW4';
//create new component that produces html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//take this components generated html and put it in
//on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));
