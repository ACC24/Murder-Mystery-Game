import React, { Component } from "react";
import "./Bedroom.css";
import { Button } from "reactstrap";
import ImageMapper from "react-image-mapper";
import bedroomPic from "../../assets/images/bedroom.jpg";

class Bedroom extends Component {
  onNextClick = (e) => {
    e.preventDefault();
    this.props.history.push("/kitchen");
  };
  
  render() {
    return (
      <div id="bed">
        <div className="container">
          <ImageMapper
            src={URL}
            map={MAP}
            width={500}
            onLoad={() => this.load()}
            onClick={(area) => this.clicked(area)}
          />
          {this.state.hoveredArea && (
            <span
              className="tooltip"
              style={{ ...this.getTipPosition(this.state.hoveredArea) }}
            >
              {this.state.hoveredArea && this.state.hoveredArea.name}
            </span>
          )}
        </div>
        <Button id="next" onClick={this.onNextClick}>
          &#8250;
        </Button>
      </div>
    );
  }
  URL = bedroomPic;
  MAP = {
    name: "my-map",
    areas: [
      {
        alt: "plant",
        title: "plant",
        coords:
          "2090,425,2067,521,2016,559,2034,637,2069,709,2063,804,2156,833,2174,728,2183,614,2182,505",
        shape: "poly",
      },
      {
        alt: "painting1",
        title: "painting1",
        coords: "364,278,549,282,549,552,378,577",
        shape: "poly",
      },
      {
        alt: "drawer1",
        title: "drawer1",
        coords: "430,721,436,771,640,744,636,695",
        shape: "poly",
      },
      {
        alt: "drawer2",
        title: "drawer2",
        coords: "440,779,440,831,636,806,635,754",
        shape: "poly",
      },
      {
        alt: "drawer3",
        title: "drawer3",
        coords: "1377,575,1377,596,1426,602,1427,581",
        shape: "poly",
      },
      {
        alt: "drawer4",
        title: "drawer4",
        coords: "1379,622,1377,600,1422,608,1420,627",
        shape: "poly",
      },
      {
        alt: "drawer5",
        title: "drawer5",
        coords: "1871,627,1871,658,1979,670,1979,633",
        shape: "poly",
      },
      {
        alt: "drawer6",
        title: "drawer6",
        coords: "1874,664,1869,690,1977,705,1974,672",
        shape: "poly",
      },
    ],
  };
}
export default Bedroom;
