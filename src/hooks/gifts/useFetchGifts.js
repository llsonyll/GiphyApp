import { useState, useEffect } from "react";
import { getGifts } from "../../helpers/getGifts";

export const useFetchGifts = (category) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifts = await getGifts(category);
    setImages(gifts);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading: images.length === 0,
  };
};
