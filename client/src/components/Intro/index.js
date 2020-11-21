import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    caption:
      "Welcome to the Banks' Manor! There has been a murder. Willard Banks was a wealthy billionaire inventor who helped develop some of the biggest pharmaceuticals in the medical industry. He met his fate one dreadful night. Mr. Banks had several enemies. It didn’t help that he was also a rather unpleasant person to most people. There was foul play indicated in their death ruling it ahomicide. The murderer is still at large and has yet to be brought to justice. It is suspected that the murderer may soon strike again.Please join us in solving this mystery, but join atyour own caution. Your involvement may end up in your own demise",
    key: "1",
  },
  {
    altText:
      "Mrs. Jodie Banks-It all started out wonderfully for Mr. and Mrs. Banks. She was a fellow coworker at the lab he worked at. Her blond hair and strikingly blue eyes caught his attention and it was love at first sight. They were married shortly after and had a beautiful baby girl. As time went on, Mr. Banks became more distant and focused only on his work. Mrs. Jodie suspected he was having an affair, but doesn’t have any definitive proof. She would like to plan a trip, but the weather is too hot this time of year and Mrs. Banks prefers to travel during the winter months.",
    caption: "",
    key: "2",
  },
  {
    altText:
      "cook-Miss Leslie Green- Miss Green and Mr. Banks developed an affair as they became closer whenever Miss Green would prepare Mr. Banks meals. He loved her cooking and often requested her to make him meals at odd hours around his hectic work schedule. She’d often bring his meals into his lab and would sometimes stay behind to converse with him about his new projects. He kept promising her he’d leave his wife, but always had an excuse to not leave her just yet. ",
    caption: "",
    key: "3",
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
        key={item.key}
      >
        <img alt={item.caption} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
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
  );
};

export default Intro;
