export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchAPokemon = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  })
);

window.fetchAllPokemon = fetchAllPokemon;
window.fetchAPokemon = fetchAPokemon;
