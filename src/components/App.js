import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import initialRecepies from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { RecipeForm } from './RecipeForm/RecipeForm';

export class App extends Component {
  state = {
    recipes: initialRecepies,
  };

  addRecipe = newRecipe => {
    this.setState(pervState => ({
      recipes: [...pervState.recipes, newRecipe],
    }));
  };

  deleteRecipe = recipeId => {
    this.setState(pervState => ({
      recipes: pervState.recipes.filter(recepie => recepie.id !== recipeId),
    }));
  };

  render() {
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe} />
        <RecipeList items={this.state.recipes} onDelite={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
}
