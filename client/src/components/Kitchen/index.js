import React, { Component } from "react";
import "./Kitchen.css";
import ImageMapper from 'react-image-mapper';
import kitchenPic from "../../assets/images/kitchen.jpg"

class Kitchen extends Component {
  
  state = { 
    hoveredArea: null, 
    msg: null, 
    moveMsg: null,
    map: {
      name: "my-map",
      areas: [
      {name:"chandelier", coords:[546,3,542,10,532,13,529,54,536,63,533,70,535,79,547,77,545,87,542,97,573,154,582,154,583,128,586,109,591,123,591,151,599,151,604,132,608,151,608,170,617,175,609,182,613,192,613,200,604,195,597,205,600,211,595,219,587,223,582,214,554,215,550,229,540,228,540,218,528,223,519,215,488,214,488,225,479,227,478,215,468,210,465,218,453,212,449,202,451,189,442,180,435,187,433,177,435,166,430,161,440,157,440,138,445,116,450,128,450,159,458,165,450,169,453,177,462,182,469,177,468,160,473,141,479,148,479,168,490,155,486,146,494,146,494,119,500,95,505,119,519,100,515,82,513,70,523,74,519,61,527,45,524,18,514,8,506,0], shape:"poly"},
      {name:"apron", coords:[1310,474,1346,485,1376,506,1367,518,1333,533,1316,532,1280,519,1265,523,1261,561,1253,566,1257,520,1267,513,1252,508,1252,495], shape:"poly"},
      {name:"pot", coords:[854,401,851,385,857,378,842,380,850,372,842,359,825,358,820,369,823,377,813,383,814,399,833,405,842,405], shape:"poly"},
      {name:"windowkey", coords:[1133,137,1399,78,1390,447,1123,413], shape:"poly"},
      {name:"window2", coords:[687,226,715,221,715,354,688,354], shape:"poly"},
      {name:"painting2", coords:[784,143,888,102,879,235,774,248], shape:"poly"},
      {name:"cabinet1", coords:[184,137,184,317,353,320,350,150], shape:"poly"},
      {name:"cabinet2", coords:[181,137,182,317,100,317,102,129], shape:"poly"},
      {name:"wine1", coords:[546,415,561,408,576,410,578,436,568,450,567,476,576,482,564,488,553,488,556,477,556,451,547,437], shape:"poly"},
      {name:"wine2", coords:[497,387,509,379,519,382,522,396,517,407,514,429,522,434,515,439,505,439,506,429,506,414,499,406], shape:"poly"},
      {name:"soup1", coords:[418,427,428,420,481,416,497,424,491,430,486,438,441,438,426,434], shape:"poly"},
      {name:"soup2", coords:[436,470,446,459,465,454,523,453,545,461,545,470,532,477,524,484,468,488,458,481,444,479], shape:"poly"},
      {name:"oven", coords:[728,432,729,468,816,507,832,519,820,524,819,557,873,580,875,480], shape:"poly"},
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
        <div className="room-container">
            <ImageMapper classsName="image-mapper" src={kitchenPic} map={this.state.map} active={false} width={1450}
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
  
  export default Kitchen;