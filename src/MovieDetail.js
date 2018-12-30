/* eslint react/destructuring-assignment: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

const API_KEY = process.env.REACT_APP_MOVIE_DB_KEY;

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;

    // conditional example
    // let title = (
    //   <em>no title</em>
    // );

    // if (this.state.movie.title) {
    //   title = (
    //     <em>title exists</em>
    //   );
    // }

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            {/* conditional example */}
            {/* {title} */}

            {/* inline conditional example */}
            {/* {this.state.movie.title ? (
              <em>title exists</em>
            ) : (
              <em>title does not exist</em>
            )} */}
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 50vh;
`;

const MovieInfo = styled.div`
  display: flex;
  background: #fff;
  padding: 2rem 10%;
  text-align: left;
  > div {
    margin-left: 1.5rem;
  } 
  img {
    min-width: 154px;
    position: relative;
    top: -5rem;
  }
`;
