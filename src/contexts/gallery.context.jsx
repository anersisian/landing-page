import { createContext, useState } from "react";
import GALLERY_DATA from "../gallery";

export const GalleryContext = createContext({
  gallery: [],
});

export const GalleryProvider = ({ children }) => {
  const [gallery, setGallery] = useState(GALLERY_DATA);

  const value = {
    gallery,
    setGallery,
  };

  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};
