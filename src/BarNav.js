import React, { useRef, useState } from "react";
import "./App.css";
// import cx from "classnames";
import Review from "./Review";

function BarNav({
    ratingFilter,
    setRatingFilter,
    searchTextFilter,
    setSearchTextFilter,
}) {
    // const changeColor = (e) => {
    //     var rating = [
    //         document.getElementById("defaultColor").style.color,
    //         document.getElementById("defaultColor").style.color,
    //         document.getElementById("defaultColor").style.color,
    //         document.getElementById("defaultColor").style.color,
    //         document.getElementById("defaultColor").style.color,
    //     ];
    //     //var rating = rating.map((x) => "#333333");
    //     for (let i = 0; i <= Number(e.target.id); i++) {
    //         rating[i] = "#ffb400";
    //     }

    //     for (let i = 0; i < rating.length; i++) {
    //         document.getElementById(i).style.color = rating[i];
    //     }
    // };
    const search = useRef();
    const handleSearchChange = () => {
        setSearchTextFilter(search.current?.value);
    };

    // const search = () => {
    //     var filtre = props.filteredMovies.filter((element) =>
    //         element.name.toLowerCase().includes(Search.current?.value)
    //     );
    //     props.setFilter(filtre);
    // };

    return (
        <div className="BarNav_container">
            <ul className="No_puce_list">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Movies</a>
                </li>
                <li>
                    <a>Reviews</a>
                </li>
            </ul>
            <div className="searchBar">
                <Review rating={ratingFilter} setRating={setRatingFilter} />
                {/* <p id="defaultColor"></p>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="0"></i>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="1"></i>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="2"></i>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="3"></i>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="4"></i> */}
                <input
                    ref={search}
                    onChange={handleSearchChange}
                    placeholder="search.."
                    type={"search"}
                    value={searchTextFilter}
                ></input>
                {/* <button onClick={() => setFilters()}>search</button> */}
            </div>
        </div>
    );
}

export default BarNav;

// function Review({ rating, setRating }) {
//     const stars = useMemo(() => Array.from(Array(5).keys()), []);
//     // let cls = "fa-solid fa-star rating"
//     // if (true) {
//     //   cls += 'rated'
//     // }
//     // <i className={cls} onClick={changeColor} id="0"></i>
//     return (
//         <>
//             {stars.map((el, idx) => (
//                 <i
//                     className={cx("fa-solid fa-star rating", {
//                         rated: idx + 1 <= rating,
//                     })}
//                     onClick={() => setRating(idx + 1)}
//                 />
//             ))}
//         </>
//     );
// }
