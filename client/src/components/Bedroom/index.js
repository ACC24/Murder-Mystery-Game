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
      {name:"plant", coords:[1386,284,1413,335,1447,324,1426,367,1448,361,1447,412,1420,433,1444,438,1413,453,1410,480,1430,497,1429,516,1415,576,1380,582,1357,570,1343,507,1340,484,1372,469,1361,448,1337,438,1316,438,1352,416,1334,391,1311,382,1338,373,1354,387,1345,356,1321,324,1358,346], shape:"poly"},
      {name:"painting1", coords:[74,158,212,158,214,358,80,384], shape:"poly"},
      {name:"crest", coords:[1034,187,1044,197,1065,201,1060,220,1073,237,1061,252,1065,269,1047,270,1034,283,1024,274,1009,275,1009,255,997,237,1003,224,1001,201,1021,201], shape:"poly"},
      {name:"shoes", coords:[323,582,373,568,359,582,395,595,408,606,389,613,363,622,348,617,337,595,332,623], shape:"poly"},
      {name:"letter", coords:[508,486,522,484,522,496], shape:"poly"},
      {name:"jewlery", coords:[1210,408,1208,394,1225,385,1288,388,1285,407,1269,413], shape:"poly"},
      {name:"flowers", coords:[596,265,604,272,619,274,619,284,631,289,622,295,623,304,606,307,606,322,614,352,605,362,590,362,583,344,591,326,583,307,569,295,583,281,583,270], shape:"poly"},
      {name:"drawer1", coords:[130,489,127,532,277,514,280,469], shape:"poly"},
      {name:"drawer2", coords:[127,536,127,573,272,555,273,518], shape:"poly"},
      {name:"drawer3", coords:[834,383,834,394,869,401,868,387], shape:"poly"},
      {name:"drawer4", coords:[833,401,832,415,864,422,869,405], shape:"poly"},
      {name:"drawer5", coords:[1205,422,1205,442,1281,450,1281,428], shape:"poly"},
      {name:"drawer6", coords:[1207,446,1203,471,1283,477,1285,453], shape:"poly"},
      ]
    },
    disabled: true
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
        <div id="bed" className="room-container">
            <ImageMapper classsName="image-mapper"  src={bedroomPic} map={this.state.map} active={false}
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
