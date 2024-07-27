import React, { Component, PureComponent } from "react";
import Movie from "./Movie";
import { v4 as uuid } from "uuid";
class Movies extends PureComponent {
  constructor(props) {
    super();
    this.moviesArr = [];
    this.state = {
      Movie: {},
      index: 0,
    };
    console.log("Movies - Constructor");
  }
  componentDidMount() {
    console.log("Movies - Mounted");
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((res) => res.json())
      .then((res) => {
        const moviesArr = res.results;
        this.moviesArr = moviesArr;
        this.setState({ Movie: moviesArr[0] });
      });
  }

  render() {
    console.log("Movies - Render");
    const handleClick = () => {
      if (this.state.index === this.moviesArr.length - 1) {
        alert("No more movies to show");
        this.setState({ index: 0 });
        return;
      }
      this.setState((prevState) => {
        return {
          Movie: { ...this.moviesArr[prevState.index], completed: true },
          index: prevState.index + 1,
        };
      });
    };
    return (
      <div>
        {this.moviesArr.length > 0 && (
          <Movie
            key={uuid()}
            movies={this.moviesArr[this.state.index]}
            posterPath={`https://image.tmdb.org/t/p/w500${
              this.moviesArr[this.state.index].poster_path
            }`}
            title={this.moviesArr[this.state.index].title}
            releaseDate={this.moviesArr[this.state.index].release_date}
            id={this.moviesArr[this.state.index].id}
            popularity={this.moviesArr[this.state.index].popularity}
            voteAverage={this.moviesArr[this.state.index].vote_average}
            voteCount={this.moviesArr[this.state.index].vote_count}
            adult={this.moviesArr[this.state.index].adult}
            handleclick={handleClick}
            index={this.state.index}
          />
        )}
      </div>
    );
  }
}

export default Movies;
