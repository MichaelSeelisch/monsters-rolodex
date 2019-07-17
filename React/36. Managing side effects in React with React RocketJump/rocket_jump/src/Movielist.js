import React, { useEffect } from 'react'
import { useRj } from 'react-rocketjump'
import { MoviesState } from './states'

const MyMoviesList = () => {
    const [state, actions] = useRj(MoviesState)

    const isLoading = state.pending
    const movies = state.data
    const loadMovies = actions.run

    useEffect(() => {
        loadMovies()
    }, [loadMovies])

    if (movies === null || isLoading) {
        return <div>Loading</div>
    } 

    return (
        <table>
            <thead>
                <tr>
                    <td>Episode</td>
                    <td>Title</td>
                    <td>Release Date</td>
                </tr>
            </thead>
            <tbody>
                {movies && movies.results.map(movie => (
                    <tr key={movie.episode_id}>
                        <td>{movie.episode_id}</td>
                        <td>{movie.title}</td>
                        <td>{movie.release_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MyMoviesList;
