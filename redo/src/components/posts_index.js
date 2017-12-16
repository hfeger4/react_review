import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderPosts(){
    return _.map(this.props.posts, post =>{
      return (
        <li key={post.id}>
          {post.title}: {post.content}

          {post.categories}
        </li>
      );
    });
  }
  render(){
    console.log(this.props.posts);
    return(
      <div>
        <h3>Posts</h3>
        <ol>
        {this.renderPosts()}
      </ol>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
