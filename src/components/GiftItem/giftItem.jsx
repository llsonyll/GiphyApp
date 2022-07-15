import PropTypes from "prop-types";
import "./giftItem.css";

const GiftItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p> {title} </p>
    </div>
  );
};

GiftItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GiftItem;
