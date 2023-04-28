console.log('funguju!');

// 1. FILMY
const renderFilms = (items) => {
    const movieListElm = document.querySelector('.movie-list');

    movieListElm.innerHTML = items
    .map(oneFilm => `
    <li class="movie-detail">
    <div class="movie-poster">
      <img 
        src="${oneFilm.posterUrl}"
        alt="${oneFilm.title}"
      />
    </div>
    <div class="movie-info">
      <h2 class="movie-title">${oneFilm.title}</h2>
      <div class="movie-year">${oneFilm.year}</div>
      <div class="movie-link">
        <a href="${oneFilm.url}" target="_blank">Odkaz na CSFD</a>
      </div>
    </div>
  </li>
  `
  )
  .join('');
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((response) => response.json())
    .then((data) =>
        //console.log(data);
        renderFilms(data));


// 2. FILMY PODLE ŽÁNRŮ

const renderOptions = (items) => {
  const selectGenreElm = document.querySelector('#select-genre');

  selectGenreElm.innerHTML = items
  .map(oneOption =>
    `<option value="${oneOption}">${oneOption}</option>`
  )
  .join('');
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/genres')
  .then((response) =>
    response.json())
  .then((data) =>
    renderOptions(data));

const filtersElm = document.querySelector('.filters');

const zobraz = (event) => {
  event.preventDefault();
  //console.log(event);
  const text = document.querySelector('#select-genre').value;
  console.log(text);

  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies?genre=${text}`)
  .then((response) => response.json())
  .then((data) => {
      //console.log(data);
      renderFilms(data)
  })
}

filtersElm.addEventListener('submit', zobraz);