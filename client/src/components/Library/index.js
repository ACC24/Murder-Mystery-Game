import React, { Component } from "react";
import "./Library.css";
import ImageMapper from 'react-image-mapper';
import libraryPic from "../../assets/images/library.jpg";
import Clues from "../Clues";
import { set } from "mongoose";

class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredArea: null,
      msg: null,
      moveMsg: null,
      map: {
        name: "my-map",
        areas: [
          { name: "pillow", coords: [71, 499, 99, 488, 104, 473, 162, 468, 209, 471, 253, 463, 272, 463, 263, 513, 258, 537, 263, 573, 258, 601, 263, 613, 257, 622, 243, 622, 230, 626, 222, 626, 222, 640, 227, 650, 222, 662, 209, 667, 202, 659, 54, 669, 35, 665, 12, 667, 21, 655, 29, 639, 38, 627, 58, 563, 71, 540, 75, 521, 76, 505], shape: "poly" , message: "Fluffy beige pillows" },
          { name: "blanket", coords: [398, 505, 391, 534, 389, 556, 381, 575, 392, 582, 398, 591, 406, 592, 403, 634, 417, 637, 422, 620, 430, 618, 437, 574, 451, 547, 474, 518, 513, 499, 546, 494, 574, 495, 600, 514, 606, 543, 614, 561, 628, 573, 633, 590, 647, 593, 660, 583, 663, 564, 660, 552, 661, 526, 661, 515, 655, 505, 658, 490, 654, 479, 642, 465, 645, 447, 631, 439, 627, 428, 609, 417, 581, 413, 538, 412, 506, 421, 474, 436, 436, 463], shape: "poly" , message: "A cozy blanket with a dark long hair"  },
          { name: "globe", coords: [634, 64, 624, 71, 631, 76, 622, 78, 608, 75, 596, 78, 588, 93, 588, 107, 593, 117, 588, 122, 595, 126, 602, 131, 611, 137, 624, 131, 632, 123, 642, 109, 646, 96, 643, 78], shape: "poly", message: "An old dusty globe" },
          { name: "lamp", coords: [692, 240, 697, 250, 693, 260, 701, 263, 716, 304, 706, 311, 696, 314, 696, 324, 706, 337, 706, 345, 711, 350, 693, 355, 675, 352, 681, 342, 684, 331, 688, 318, 683, 311, 667, 306, 684, 264, 688, 251], shape: "poly" , message: "A nice little lamp to brighten up the place" },
          { name: "papers", coords: [783, 351, 775, 358, 763, 357, 760, 363, 745, 360, 737, 366, 727, 357, 734, 343, 745, 346], shape: "poly" , message: "Scattered papers" },
          { name: "painting3", coords: [877, 154, 938, 149, 937, 203, 878, 204], shape: "poly" , message: " A painting of a purple flower"  },
          { name: "painting4", coords: [878, 255, 939, 250, 937, 317, 879, 314], shape: "poly" , message: "A painting of a pink flower"  },
          { name: "safe", coords: [494, 277, 491, 327, 576, 320, 576, 278], shape: "poly" , message: "You looked in the bookshelf and found that it had a false back with a small safe inside. Within it you find several documents including a romantic trip for two to the Bahamas, and a statement of debt from Harold Spencer who apparently owed Mr Banks a large sum of money" },
          { name: "books1", coords: [510, 168, 509, 179, 547, 183, 540, 172], shape: "poly" , message: "Books on travel" },
          { name: "books2", coords: [389, 290, 476, 290, 478, 330, 389, 338], shape: "poly" , message: "Books on Chemistry" },
          { name: "books3", coords: [606, 247, 637, 242, 637, 264, 609, 267], shape: "poly" , message: "Poetry books" },
          { name: "books4", coords: [390, 410, 481, 399, 482, 424, 432, 427, 389, 425], shape: "poly" , message: "Philosophy books"  },
          { name: "rug", coords: [920, 572, 741, 696, 1226, 696, 1245, 661], shape: "poly" , message: "A small area rug" },
        ]
      },
      disabled: true,
      showClue: false,
      clueMessage: ""
    }
    this.toggle = this.toggle.bind(this)
  };

  clicked(area) {
    this.setState({
      showClue: true,
      clueMessage: area.message
    })
    console.log(area)
  };

  getTipPosition(area) {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };

  toggle() {
    console.log(this)
    this.setState({ ...this.state, showClue: !this.state.showClue })
  }

  render() {
    console.log(this.state.clueMessage)

    return (
      <>
        <div className="room-container">
          <ImageMapper classsName="image-mapper" src={libraryPic} map={this.state.map} active={false} width={1450}
            onClick={area => this.clicked(area)}
          />
          {
            this.state.hoveredArea &&
            <span className="tooltip"
              style={{ ...this.getTipPosition(this.state.hoveredArea) }}>
              {this.state.hoveredArea && this.state.hoveredArea.name}
            </span>
          }
          {<Clues message={this.state.clueMessage}
            showClue={this.state.showClue}
            toggle={this.toggle} />}
        </div>
      </>
    );
  }
}
export default Library;