import { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";

export const ProjectCarousel = ({ projectImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importedImages = projectImages.map((image) =>
      require(`../assets/projects/${image}`)
    );
    setImages(importedImages);
  }, [projectImages]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [style, setStyle] = useState({
    transform: `translate(-${currentIdx}00%)`,
  });
  const IMAGE_SIZE = images.length;
  const slideRef = useRef(null);

  const moveSlide = (i) => {
    let nextIndex = currentIdx + i;
    if (nextIndex < 0) nextIndex = IMAGE_SIZE - 1;
    else if (nextIndex >= IMAGE_SIZE) nextIndex = 0;
    setCurrentIdx(nextIndex);
  };

  const handleDot = (i) => {
    setCurrentIdx(i);
    setStyle({ transform: `translate(-${i}00%)` });
  };

  useEffect(() => {
    setStyle({ transform: `translate(-${currentIdx}00%)` });
  }, [currentIdx]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev === IMAGE_SIZE - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx]);

  return (
    <>
      <Container>
        <Window ref={slideRef}>
          <Prev role="button" onClick={() => moveSlide(-1)}>
            ◀
          </Prev>
          {images.map((image) => (
            <Images $imageURL={image} key={image} style={style} />
          ))}
          <Next role="button" onClick={() => moveSlide(1)}>
            ▶
          </Next>
        </Window>
        <DotContainer>
          <DotUl>
            {images.map((image, idx) => {
              return (
                <li
                  role="button"
                  onClick={(e) => handleDot(idx)}
                  key={image}
                  className={currentIdx === idx ? "dot-selected" : ""}
                ></li>
              );
            })}
          </DotUl>
        </DotContainer>
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 100%;
  height: 360px;
  background-color: inherit;
  position: relative;
`;

const Window = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const Images = styled.div`
  background-image: url(${(props) => props.$imageURL});
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  flex: none;
  transition: 0.4s;
`;

const Prev = styled.div`
  width: 32px;
  height: 100%;
  color: #c0c0c0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  cursor: pointer;
  transition: 0.4s;
  z-index: 99;
  top: 50%; /* Adjust the vertical position to the middle of the image */
  transform: translateY(-50%); /* Center the button vertically */

  &:hover {
    background-color: rgba(121, 121, 121, 0.3);
  }
`;

const Next = styled(Prev)`
  left: unset;
  right: 0;
`;

const DotContainer = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DotUl = styled.ul`
  display: flex;
  li {
    border: 5px solid white;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 1px 1px 2px #000000e6;
    opacity: 0.5;
    margin: 8px;
    cursor: pointer;
  }

  .dot-selected {
    opacity: 1;
  }
`;
