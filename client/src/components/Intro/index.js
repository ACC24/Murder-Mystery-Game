import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Int from "../../assets/images/Intro.jpg";
import Inst from "../../assets/images/inst.jpg";
import Butler from "../../assets/images/butler.jpg";
import Groundskeeper from "../../assets/images/groundskeeper.jpg";
import Wife from "../../assets/images/wife.jpg";
import Cook from "../../assets/images/cook.jpg";
const items = [
  {
    src: Int,
    altText: "",
    caption: "Intro",
  },
  {
    src: Inst,
    altText: "",
    caption: "Instructions",
  },
  {
    src: Wife,
    altText: "",
    caption: "Wife",
  },
  {
    src: Cook,
    altText: "Suspect 1 the butler,Mr.  Hunter Graves. ",
    caption: "Butler",
  },
  {
    src: Butler,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: Groundskeeper,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];
const Intro = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >

        <img src={item.src} alt={item.altText} width="700px" height="500px" />
        <CarouselCaption

        // captionText={item.caption}
        // captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <div>
    <Carousel interval={false}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </div>
  );
};
export default Intro;