import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

// This code below is so that the app does not to reload over and over
// if (module.hot) {
//   module.hot.accept();
// }

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
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);
    // resultsView.render(model.state.search.results); // we don't want all the results, just the number we assign -- see below

    // 3) Render results on the view
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination button
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // 2) Render NEW pagination button
  paginationView.render(model.state.search);
};

// When we are listening for multiple events that will call the same function several times, it's better to have an array of those possible events and loop over them.
// ["hashchange", "load"].forEach((ev) => window.addEventListener(ev, showRecipe)); --> moved to VIEW

const init = function () {
  recipeView.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
