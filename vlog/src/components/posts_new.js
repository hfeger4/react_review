import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
  renderField(field){ //return some jsx, field connects it
    return(
      <div className="form-group">
      <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} //handles onChange
        />
        {field.meta.error}
      </div>
    )
  }
  render(){
    return (
      <form >
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field 
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    )
  }
}

function validate(values){
  const errors={};
  if(!values.title || values.title.length < 3){
    errors.title = "Enter a title that is at least 3 characters!";
  }
  if(!values.categories){
    errors.categories = "Enter some categories!";
  }
  if(!values.content){
    errors.content = "Enter some content please.";
  }
  //validate inputs from values 
  //if errors is empty, form is fine to submit
  //if errors has any properties, redux from assumes form invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' //name of form, make it unique
})(PostsNew);