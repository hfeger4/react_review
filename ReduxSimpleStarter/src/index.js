import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDalHtnKREbLdDrhShX3afAWSZaI5AqJW4';

//create new component that produces html

class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
      //this.setState({videos: videos})
    });

  }
  render(){
  return (
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos}/>
    </div>
  );
  }
}

//take this components generated html and put it in
//on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
