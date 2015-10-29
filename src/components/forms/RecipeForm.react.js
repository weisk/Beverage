import React from 'react';
import { connectReduxForm } from 'redux-form';
import recipeValidation from '../../utils/validations/recipeForm';

class RecipeForm extends React.Component {
  render() {
    const { fields: {title, tags, code}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" {...title} />
          {title.error && title.touched && <div>{title.error}</div>}
        </div>
        <div>
          <label htmlFor="tags">Tags</label>
          <input type="text" {...tags} />
          {tags.error && tags.touched && <div>{tags.error}</div>}
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <textarea {...code} />
          {code.error && code.touched && <div>{code.error}</div>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

RecipeForm = connectReduxForm({
  form: 'recipe',
  fields: ['title', 'tags', 'code'],
  validate: recipeValidation
})(RecipeForm);

export default RecipeForm;