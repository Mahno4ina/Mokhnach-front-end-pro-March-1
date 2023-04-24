fetch('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    const charactersWithFilms = characters.map(character => {
      return {
        name: character.name,
        mass: character.mass,
        height: character.height,
        gender: character.gender,
        films: character.films
      }
    });
    const charactersWithThreeOrMoreFilms = charactersWithFilms.filter(character => character.films.length >= 3);
    console.log(charactersWithThreeOrMoreFilms);
  });
