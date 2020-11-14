import React, { Component } from "react";
import "./Bedroom.css";
import ImageMapper from 'react-image-mapper';
import bedroomPic from "../../assets/images/bedroom.jpg"
console.log(bedroomPic);

class Bedroom extends Component {
  state = { 
    hoveredArea: null, 
    msg: null, 
    moveMsg: null,
    map: {
      name: "my-map",
      areas: [
      {name:"plant", coords:[2090,425,2067,521,2016,559,2034,637,2069,709,2063,804,2156,833,2174,728,2183,614,2182,505], shape:"poly"},
      {name:"painting1", coords:[364,278,549,282,549,552,378,577], shape:"poly"},
      {name:"drawer1", coords:[430,721,436,771,640,744,636,695], shape:"poly"},
      {name:"drawer2", coords:[440,779,440,831,636,806,635,754], shape:"poly"},
      {name:"drawer3", coords:[1377,575,1377,596,1426,602,1427,581], shape:"poly"},
      {name:"drawer4", coords:[1379,622,1377,600,1422,608,1420,627], shape:"poly"},
      {name:"drawer5", coords:[1871,627,1871,658,1979,670,1979,633], shape:"poly"},
      {name:"drawer6", coords:[1874,664,1869,690,1977,705,1974,672], shape:"poly"},
      ]
    },
    disabled: true
  };

  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/kitchen");
  };
	load() {
		this.setState({ msg: "Interact with image !" });
	};
	clicked(area) {
		this.setState({
			msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
  };
  getTipPosition(area) {
		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };
  render() {
    return (
      <>
        <div className="room-container">
            <ImageMapper classsName="image-mapper" src={bedroomPic} map={this.state.map} width={1900}
              onLoad={() => this.load()}
              onClick={area => this.clicked(area)}
            />
            {
              this.state.hoveredArea &&
              <span className="tooltip"
                style={{ ...this.getTipPosition(this.state.hoveredArea) }}>
                {this.state.hoveredArea && this.state.hoveredArea.name}
              </span>
            }
        </div>
      </>
    );
  }
}
export default Bedroom;