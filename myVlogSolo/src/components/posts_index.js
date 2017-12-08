import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import _ from 'lodash';

class PostsIndex extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li>
          {post.id}
        </li>
      );
    });
  }
  render(){
    return(
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);