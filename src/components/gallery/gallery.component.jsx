import React from "react";
import Tile from "../tile/tile.component";
import { useContext, useCallback } from "react";
import { GalleryContext } from "../../contexts/gallery.context";
import { GalleryContainer } from "./gallery.styles";
import _ from "lodash";

const Gallery = () => {
  const { gallery } = useContext(GalleryContext);
  const reqElement = React.useRef(null);

  // useCallback is used to memoize the function and prevent it from being recreated on every render
  // throttle is used to limit the number of times the function is called in a given time period
  // lodash is used to throttle the function
  // 16 is the number of milliseconds to wait before calling the function again to ensure smooth 60 frames per second

  window.onmousemove = useCallback(
    _.throttle((e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = reqElement.current.offsetWidth - window.innerWidth,
        maxY = reqElement.current.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

      reqElement.current.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
        },
        {
          duration: 4000,
          fill: "forwards",
          easing: "ease",
        }
      );
    }, 16),
    []
  );

  return (
    <>
      <GalleryContainer ref={reqElement}>
        {gallery && gallery.map((item) => <Tile key={item.id} item={item} />)}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
