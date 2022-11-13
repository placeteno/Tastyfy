import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

// When we are listening for multiple events that will call the same function several times, it's better to have an array of those possible events and loop over them.
// ["hashchange", "load"].forEach((ev) => window.addEventListener(ev, showRecipe)); --> moved to VIEW

const init = function () {
  recipeView.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
