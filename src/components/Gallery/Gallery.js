import React, { Component } from "react";
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid";

class Gallery extends Component {
  state = {
    activeImg: "",
  };
  componentDidMount() {
    this.setState({ activeImg: this.props?.gallery?.[0] });
  }
  openImage = (e) => {
    const url = e.target.dataset.main;
    this.setState({ activeImg: url });
  };
  render() {
    const { openImage } = this;
    const { gallery } = this.props;
    const { activeImg } = this.state;
    return (
      <>
        <div className="itemPage__gallery">
          {gallery?.map((img) => {
            return (
              <div key={uuid()} className="itemPage__gallery-box">
                <img
                  data-main={img}
                  onClick={openImage}
                  width="100"
                  src={img}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="itemPage__main-img">
          <img src={activeImg || gallery?.[0]} alt="" />
        </div>
      </>
    );
  }
}

Gallery.defaultProps = {
  gallery: [],
};

Gallery.propTypes = {
    gallery: PropTypes.array.isRequired
}

export default Gallery;
