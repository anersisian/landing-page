import React from "react";
import { TileContainer, TileImage } from "./tile.styles";

const Tile = ({ item }) => {
  const { imageUrl } = item;
  return (
    <TileContainer>
      <TileImage src={imageUrl} alt="tile" />
    </TileContainer>
  );
};

export default Tile;
