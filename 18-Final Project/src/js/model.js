import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    // Formatting code
    const data = await getJSON(`API_URL${id}`);

    let { recipe } = data.data;
    console.log('recipe', recipe);
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    console.error(`${err} 🌩️🌩️🌩️`);
    throw err;
  }
};
