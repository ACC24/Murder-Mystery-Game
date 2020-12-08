import React, { Component } from "react";
import "./Garden.css"
import ImageMapper from 'react-image-mapper';
import gardenPic from "../../assets/images/garden.jpg";
import Clues from "../Clues";

class Garden extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hoveredArea: null,
      msg: null,
      moveMsg: null,
      map: {
        name: "my-map",
        areas: [
          { 
            name: "sheddoor", 
            coords: [901, 384, 947, 375, 945, 569, 901, 559], 
            shape: "poly", 
            message: "You opened the door to the shed, looks like there's some printed search results for 'Deadliest weed killers' items in the shed seem to have been thrown around" 
          },
          { 
            name: "shoe", 
            coords: [788, 566, 796, 555, 805, 564, 799, 571], 
            shape: "poly", 
            message: "A single blue shoe, size 6" 
          },
          { 
            name: "ladystatue", 
            coords: [760, 454, 758, 429, 767, 420, 760, 368, 742, 362, 747, 347, 743, 334, 729, 334, 724, 347, 728, 362, 719, 366, 706, 393, 718, 406, 711, 445, 724, 458], 
            shape: "poly", 
            message: "A statue of a pretty lady, it's been here a while" 
          },
          { 
            name: "pearls", 
            coords: [532, 660, 540, 668, 551, 663, 558, 650, 549, 650, 542, 657], 
            shape: "poly", 
            message: "You found some pearls on the ground, they seem to be from a neacklace that was torn" 
          },
          { 
            name: "watch", 
            coords: [243, 588, 243, 579, 257, 579, 259, 588], 
            shape: "poly", 
            message: "A watch laying on the floor, it's engraved with the initials H.S." 
          },
          { 
            name: "manstatue", 
            coords: [45, 465, 15, 456, 4, 456, 4, 424, 4, 388, 15, 379, 11, 368, 20, 356, 35, 362, 33, 375, 43, 394], 
            shape: "poly", 
            message: "An old statue of a muscular man, his arm is missing" 
          },
          { 
            name: "fountain", 
            coords: [487, 602, 478, 595, 478, 575, 487, 566, 491, 553, 460, 543, 404, 534, 399, 504, 399, 486, 387, 481, 404, 468, 391, 455, 414, 455, 419, 445, 437, 445, 445, 435, 394, 430, 385, 419, 399, 409, 384, 400, 381, 382, 392, 373, 384, 368, 403, 364, 413, 352, 401, 349, 394, 349, 382, 344, 386, 332, 386, 322, 378, 296, 372, 318, 368, 331, 372, 343, 360, 350, 348, 343, 340, 353, 354, 363, 368, 366, 360, 375, 371, 384, 368, 399, 353, 409, 368, 419, 362, 432, 307, 434, 321, 445, 332, 445, 340, 453, 363, 457, 353, 466, 363, 477, 358, 491, 355, 507, 350, 537, 296, 541, 266, 558, 266, 569, 272, 576, 271, 599, 266, 605, 268, 622, 303, 635, 373, 635, 445, 635, 482, 623], 
            shape: "poly", 
            message: " The fountain where the butler and cook found Mr Banks' lifeless body" 
          },
          { 
            name: "tree1", 
            coords: [564, 487, 562, 432, 590, 411, 612, 404, 627, 396, 632, 370, 618, 357, 637, 347, 629, 332, 619, 329, 606, 320, 609, 300, 592, 283, 588, 269, 573, 266, 556, 247, 537, 255, 522, 263, 509, 263, 495, 283, 478, 292, 469, 306, 460, 324, 441, 323, 437, 339, 451, 354, 460, 381, 471, 404, 480, 413, 489, 411, 496, 424, 517, 431, 517, 452, 506, 474, 512, 483, 531, 477, 550, 466], 
            shape: "poly", 
            message: "A very nice tree" 
          },
          { name: "tree2", 
          coords: [254, 479, 248, 436, 250, 426, 270, 431, 284, 412, 296, 395, 304, 378, 312, 365, 307, 355, 323, 333, 317, 317, 300, 318, 303, 299, 285, 286, 267, 279, 245, 276, 225, 272, 207, 262, 179, 282, 171, 292, 163, 281, 145, 290, 145, 297, 126, 303, 127, 313, 115, 326, 122, 344, 126, 365, 126, 383, 129, 400, 138, 395, 140, 421, 161, 426, 180, 422, 199, 432, 205, 437, 203, 465, 223, 472, 231, 467], 
          shape: "poly", 
          message: "A mean looking tree" 
        },
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
          <ImageMapper classsName="image-mapper" src={gardenPic} map={this.state.map} active={false} width={1450}
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

export default Garden;