import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import initialRecepies from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    recipes: initialRecepies,
  };

  deleteRecipe = recipeId => {
    this.setState(pervState => ({
      recipes: pervState.recipes.filter(recepie => recepie.id !== recipeId),
    }));
  };

  render() {
    return (
      <Layout>
        <div>Recipe Form</div>
        <RecipeList items={this.state.recipes} onDelite={this.deleteRecipe} />
        <div>Image modal</div>
        <GlobalStyle />
      </Layout>
    );
  }
}
