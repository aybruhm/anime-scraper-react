// Internal Imports
import React, { useState } from 'react';

// Axios Imports
import axios from "axios";

// Styles Imports
import "./main.css";

// Component Imports
import Navbar from "../navbar/Navbar";
import SearchResults from "../results/SearchResults";


const Home = () => {

    // set anime state
    const [anime, setAnime] = useState('');
    const [results, setAnimeResults] = useState([]);

    // function to handle anime change
    const handleAnimeChange = (event) => {

        // set anime state to the event value
        setAnime(event.target.value);

        // clear input value
        event.target.value = "";
    };

    // function to search for an anime
    const AnimeSearch = (event) => {

        // prevent default behaviour of form
        event.preventDefault();

        // baseURL
        const baseURL = "https://animesukurepa.up.railway.app/api/v1/";

        axios({
            method: "POST",
            url: `${baseURL}search/`,
            data: {
                "name": anime,
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {

                // pass anime data to search results
                let animesJson = res.data.data;

                // set animes data to anime results state
                setAnimeResults(animesJson);
            })
            .catch((err) => {
                console.log("Erorr: ", err);
            });
    };

    return (
        <>

            {/* Main */}
            <section className="search">

                {/* Navbar */}
                <Navbar />
                {/* End of Navbar */}

                <div className="container">

                    <div className="anime__search">
                        <h1 className="anime__title">
                            Anime<span className="anime__scraper">sukurepa</span>
                        </h1>

                        <h4 className="anime__subtitle">
                            Find and download anime with ease
                        </h4>

                        <form onSubmit={AnimeSearch}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="search__input"
                                    placeholder="What are you looking for?"
                                    onChange={handleAnimeChange}
                                    value={anime}
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="search__btn">Search</button>
                            </div>
                        </form>
                    </div>

                    <div className="anime__search__meta">
                        <p className="h5">Let us help you find anime with no sweat.</p>
                        <p className="h5">Tell us what you want and we'd bring it to you.</p>
                    </div>
                </div>
            </section>
            {/* End of Main */}

            {/* Search Results */}
            {results.length > 0 ? <SearchResults results={results} /> : "" }
            {/* End of Search Results */}
        </>
    )
}

export default Home;