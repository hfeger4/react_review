import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDalHtnKREbLdDrhShX3afAWSZaI5AqJW4';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

//create new component that produces html

class App extends Component{
  render(){
  return (
    <div>
      <SearchBar />
    </div>
  );
  }
}

//take this components generated html and put it in
//on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
