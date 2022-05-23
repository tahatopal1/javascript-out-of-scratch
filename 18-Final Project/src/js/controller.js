import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    // 1. Loading
    await model.loadRecipe(id); // Returns nothing, yet we have an access to 'state' object

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderError();
  }
};

//controlRecipes();

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

// Subscriber
const init = function name() {
  recipeView.addHandlerRender(controlRecipes);
};

init();
