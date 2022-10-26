import { useState } from 'react'
import './App.css'

const App = () => {
  console.log("App 'function' (component) runs...")

  const name = "Tóth Bálint"

  const [ titleInput, setTitleInput ] = useState("")
  const [ lengthInput, setLengthInput ] = useState("")
  const [ ageResInput, setAgeResInput ] = useState("")
  const [ searchInput, setSearchInput ] = useState("")
  const [ movies, setMovies ] = useState([])

  const addMovie = () => {
    setMovies([ ...movies, {
      title: titleInput, lenghtInMin: lengthInput, ageRes: ageResInput } ])
  }

  return (
    <>
    <main>
      <h1>Movies</h1>
      <p>Favourite movies of {name}:</p>
      <input
        type="text"
        placeholder='title'
        value={titleInput}
        onChange={e => setTitleInput(e.target.value)} />
      <input
        type="number"
        placeholder='length'
        value={lengthInput}
        onChange={e => setLengthInput(e.target.value)} />
      <input
        type="number"
        placeholder='age restriction'
        value={ageResInput}
        onChange={e => setAgeResInput(e.target.value)} />
      <input
        type="text"
        placeholder='search'
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)} />
      <button onClick={addMovie}>Add</button>
      <button onClick={() => setMovies([])} >Delete all</button>
      <ul>
        {movies
          .filter(movie => movie.title.includes(searchInput))
          .map((movie, i) => (
          <li className='movie' key={i}>
            <span>
            { movie.ageRes > 17 ? "Adult only" : "Child friendly" }
            </span>
            &nbsp;{movie.title}&nbsp;
            <span>({movie.lenghtInMin} min.)</span>
          </li>))}
      </ul>
    </main>
    <footer>
      Created by {name}
    </footer>
    </>
  )
}

export default App
