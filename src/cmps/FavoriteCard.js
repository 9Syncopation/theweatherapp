import React from "react";
import { connect } from "react-redux";
import { removeFavoriteLocation } from "../actions/indexActions";
import Typography from "@material-ui/core/Typography";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import LocationOnIcon from '@material-ui/icons/LocationOn';

import cogoToast from "cogo-toast";

const mapStateToProps = (state) => {
  return {
    location: state.locations,
  };
};
class FavoriteCard extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <section className="card">
        <div className="card-details">
		 
		  <span>
		  <LocationOnIcon />
		  {location.LocalizedName}
		</span>
            <Typography variant="h3" component="h3">
             {location[0].LocalizedName}
            </Typography>

            <DeleteOutlinedIcon
              onClick={() => {
                this.props.dispatch(removeFavoriteLocation(location.key));
                cogoToast.success(`Removed successfully`);
              }}
            />
          </div>
        
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(FavoriteCard);
