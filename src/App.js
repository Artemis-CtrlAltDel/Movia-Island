import React, { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
// import Counter from './Counter'

import './App.css'
import SearchIcon from './search.svg'

// api key : 220f2351

let API_KEY = '220f2351'
let API_URL = 'http://www.omdbapi.com/?apikey=' + API_KEY

const App = () => {

    let [movies, setMovies] = useState([])
    let [searchItem, setSearchItem] = useState('')

    let fetchMovies = async (title) => {
        let response = await fetch(`${API_URL}&s=${title}`)
        let data = await response.json()

        setMovies(data.Search)
    }

    useEffect(() => {
        fetchMovies('avengers')
    }, [])

    return (
        <div className="App">

            <div className="searchBar">
                <h1>Movia Island</h1>

                <div className="search">
                    <input
                        placeholder="Search for movies"
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                    <div className="searchIconWrapper">
                        <img
                            src={SearchIcon}
                            alt="search_icon"
                            onClick={() => fetchMovies(searchItem)}
                        />
                    </div>
                </div>
            </div>

            {
                movies?.length > 0 ?
                    (
                        <div className="container">
                            {movies.map(
                                (movie) => <MovieCard movie={movie} />
                            )}
                        </div>
                    )
                    :
                    (
                        <div className="empty">
                            <h2>No movies found.</h2>
                        </div>
                    )
            }

        </div>
    )

}

export default App