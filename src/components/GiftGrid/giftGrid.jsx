import PropTypes from "prop-types";
import "./giftGrid.css";

import GiftItem from "../GiftItem";
import { useFetchGifts } from "../../hooks/gifts/useFetchGifts";

const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);

  return (
    <>
      <h3> {category}</h3>
      {isLoading && <p className="loading"> Cargando... </p>}
      <ol className="card-grid">
        {images.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </ol>
    </>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GiftGrid;
