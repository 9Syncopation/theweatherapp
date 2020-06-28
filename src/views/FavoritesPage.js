import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteCard from "../cmps/FavoriteCard";
// import { removeFavoriteLocation } from "../actions/indexActions";
import UtilsService from "../services/UtilsService";
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};
class FavoritesPage extends Component {
  render() {
    return (
      <section className="main-favorites-area">
        {this.props.favorites.map((location) => {
          return (
            <FavoriteCard key={UtilsService._makeId()} location={location} />
          );
        })}
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(FavoritesPage);
