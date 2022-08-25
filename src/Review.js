import React, { useMemo } from "react";
import cx from "classnames";

function Review({ rating, setRating }) {
  const stars = useMemo(() => Array.from(Array(5).keys()), []);
  // let cls = "fa-solid fa-star rating"
  // if (true) {
  //   cls += 'rated'
  // }
  // <i className={cls} onClick={changeColor} id="0"></i>
  return (
    <>
      {stars.map((el, idx) => (
        <i
          key={idx}
          className={cx("fa-solid fa-star rating", {
            rated: idx + 1 <= rating,
          })}
          onClick={() => setRating(idx + 1)}
        />
      ))}
    </>
  );
}
export default Review;
