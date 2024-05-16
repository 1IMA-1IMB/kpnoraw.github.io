
console.log('Dette er for å sjekke at js fungerer')

async function logMovies() {
    const response = await fetch("http://localhost:3000/getallstudents");
    const movies = await response.json();
    console.log(movies);
  }

logMovies();