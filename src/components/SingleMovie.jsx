import React from "react";
// import props.myClasses from "../component";

const tempImgUrl= "https://dummyimage.com/300x400/2372f5/ffffff?text=No%20Image%20available";
function SingleMovie(props) {
    return (
        <div className={props.myClasses.card.main}>
            <img className={props.myClasses.card.img} src={(props.movie.Poster !== 'N/A') ? props.movie.Poster : tempImgUrl} alt={`A poster for ${props.movie.Type} - ${props.movie.Title}`} />
            <ul className={props.myClasses.card.details}>
                <li className={props.myClasses.card.title}>Name: <strong>{props.movie.Title}</strong></li>
                <li className={props.myClasses.card.title}>Year: <strong>{props.movie.Year}</strong></li>
                <li className={props.myClasses.card.title}>Type: <strong>{props.movie.Type}</strong></li>
            </ul>
        </div>
    )
}


export default SingleMovie;