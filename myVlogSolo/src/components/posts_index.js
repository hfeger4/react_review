import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostsIndex extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    return(
      <div>
        Hello There
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

export default PostsIndex;
