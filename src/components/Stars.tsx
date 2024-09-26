import React from "react";
import Star from "./Star";

interface Props {
  count: number;
}

const Stars = (counter: Props): React.ReactNode => {
  const { count } = counter;

  if (count < 1 || count > 5 || !Number.isInteger(count)) {
    return null;
  }

  return (
      <div className="card">
        <img src={require("../assets/img/superman.jpeg")} alt="плакат фильма" className="film-banner" />
        <div className="film-info">
          <h1 className="film-title">Супермен</h1>
          <ul className="card-body-stars u-clearfix">
            {Array.from({ length: count }, (_, index) => (
              <Star key={index} />
            ))}
          </ul>
          <div className="button__container">
            <button type="submit" title="купить" className="button__price">
              <span className="price__main-value">купить 1299₽</span>
            </button>
            <button type="submit" title="подробнее"className="button__more-info">
              <span className="more-info">подробнее →</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Stars;
