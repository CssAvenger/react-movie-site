import React from "react";

function Header(props) {
    let search = props.state.searchValue;
    let setMovie = props.state.movie;
    let setSearch = props.state.search;

    return (
        <header className={props.myClasses.header.block}>
            <h4 className="text-4xl text-uppercase text-center text-white">🎬 Movie Avenger 🎬</h4>
            <div className={props.myClasses.searchBox.mainBlock}>
                <input className={props.myClasses.searchBox.input} placeholder="Enter any movie, star, genre" onChange={(e) => {setSearch(e.target.value) }} onKeyDown={(e) => { if(e.key === 'Enter') setMovie(e.target.value)}} defaultValue="Spiderman"/>
                <button className={props.myClasses.searchBox.searchBtn} onClick={() => { setMovie(search)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </header>

    );
}
export default Header;