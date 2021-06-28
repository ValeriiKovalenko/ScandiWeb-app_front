import React, { Component } from "react";
import { getAllItems } from "../../API/itemsControler";
import store from "../../store/store";
import { v4 as uuid } from "uuid";
import SizeControler from "../../components/AppBar/UserBar/Cart/SizeControler";

class ItemPage extends Component {
  state = {
    item: {},
    itemName: "",
    activeImg: "",
  };
  componentDidMount() {
    this.setState({
      itemName: this.props.match.params.id.split("_").join(" "),
    });
    getAllItems().then((data) => {
      const currentItem = data.find(
        (item) => item.name === this.state.itemName
      );
      this.setState({ item: currentItem, activeImg: currentItem.gallery[0] });
    });
  }
  componentDidUpdate() {
    console.log(this.state.item.gallery);
  }

  openImage = (e) => {
    const url = e.target.dataset.main;
    this.setState({ activeImg: url });
  };

  render() {
    const { openImage } = this;
    const { item, activeImg } = this.state;
    const { name, gallery, attributes, fullPrice, totalPrice, currency } = item;

    return (
      <article className="itemPage">
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
          <img src={activeImg} alt="" />
        </div>
        <div className="itemPage__info">
          <h2>{name}</h2>
          {attributes?.map(({ name, type, items }) => {
            if (name === "Size") {
              return (
                <div className="sizeBar" key={uuid()}>
                  <h3 className="itemPage__attribute-title">{name}:</h3>{" "}
                  <SizeControler
                    attributes={attributes}
                    itemName={name}
                    location="page"
                  />
                </div>
              );
            }
          })}
                <h3>{currency}</h3>
        </div>
      </article>
    );
  }
}

export default ItemPage;
