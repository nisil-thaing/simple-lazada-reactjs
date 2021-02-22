import React from 'react';
import { number } from 'prop-types';

import { Container } from './RatingStars.style';
import { bool } from 'prop-types';

function RatingStars ({
  ratings,
  numOfRaters,
  maxRatingSystem,
  usingSmallInfo
}) {
  const ratingStars = [ ...Array(Math.floor(maxRatingSystem)).keys() ];

  return <Container className="d-flex">
    <ul className="d-flex p-0 m-0">
      {
        ratingStars.map((rating, index) => <li key={ index } className="mr-1">
          {
            rating + 1 <= ratings
              ? <i className="fa fa-star" />
              : (
                rating < ratings
                  ? <i className="fa fa-star-half-o" />
                  : <i className="fa fa-star-o" />
              )
          }
        </li>)
      }
    </ul>
    <a href="#" className="ml-1 rating-text">
      {
        usingSmallInfo
          ? `(${ numOfRaters })`
          : numOfRaters !== 1
            ? `${ numOfRaters } Ratings`
            : `${ numOfRaters } Rating`
      }
    </a>
  </Container>;
}

RatingStars.propTypes = {
  ratings: number.isRequired,
  numOfRaters: number,
  maxRatingSystem: number,
  usingSmallInfo: bool
};

RatingStars.defaultProps = {
  numOfRaters: 0,
  maxRatingSystem: 5,
  usingSmallInfo: false
};

export default RatingStars;