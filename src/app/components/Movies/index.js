import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieCard from "../MovieCard";
import { withRouter } from "react-router-dom";
import "./index.scss";
import Main from "../Main";

class Movies extends React.Component {
  constructor(movie) {
    super();
    this.state = {
      isLoading: false,
      error: null,
      movies: [],
      favorites: [],
    };
  }

  toggleFavourites = (id) => {
    console.log(id);
    const { favorites } = this.state;
    if (favorites.includes(id)) {
      const newFavorite = favorites.filter((favorite) => favorite !== id);
      this.setState({ favorites: newFavorite });
    } else {
      this.setState({ favorites: favorites.concat(id) });
    }
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });

      const response = await fetch(
        "https://academy-video-api.herokuapp.com/content/free-items/"
      );
      const json = await response.json();

      if (!response.ok) {
        const error =
          { 404: "The thing you're looking for is not there" }[
            response.status
          ] || "Something went wrong!";

        throw new Error(error);
      }

      this.setState({ movies: json });
    } catch (e) {
      this.setState({ error: e.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, error, movies, favorites } = this.state;
    // console.log(this.state.favorites);
    return (
      <div className="movies-content">
        {isLoading && <p>LOADING...</p>}
        {error && <p>{error}</p>}
        {movies.map(({ title, image, description, id }) => (
          <MovieCard
            key={id}
            image={image}
            title={title}
            description={description}
            id={id}
            toggleFavourites={this.toggleFavourites}
            favorites={favorites}
          />
        ))}
      </div>
    );
  }
  // render() {
  //   const { favorites } = this.state;
  //   return (
  //     <Router>
  //       <Switch>
  //         <Route exact path="/">
  //           <Home
  //             favorites={favorites}
  //             toggleFavourites={this.toggleFavourites}
  //           />
  //         </Route>
  //         <Route exact path="/login">
  //           <Login />
  //         </Route>
  //       </Switch>
  //     </Router>
  //   );
  // }
}

export default withRouter(Movies);
