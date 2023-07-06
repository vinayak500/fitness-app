import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div className="arrow right-arrow" onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div className="arrow left-arrow" onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <div
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        className="scroll-item"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
      </div>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
