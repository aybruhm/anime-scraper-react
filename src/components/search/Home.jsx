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

    // set submit button state
    const [submitting, isSubmitting] = useState(Boolean);

    // set error handling
    const [formErr, setFormErr] = useState(Boolean);
    const [networkErr, setNetworkErr] = useState('');

    // function to handle anime change
    const handleAnimeChange = (event) => {

        // set anime state to the event value
        setAnime(event.target.value);
    };

    // function to search for an anime
    const AnimeSearch = (event) => {

        // prevent default behaviour of form
        event.preventDefault();

        // set the submit button state
        isSubmitting(!submitting);

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

                // set the form error to true
                setFormErr(!formErr)

                // set the nework error to the below message
                setNetworkErr("Oops, looks like you have bad network. Try again.. :-)")

                // set a 3s timer
                setTimeout(() => {
                    // refresh window location
                    window.location.reload();
                }, 3000);
            });
    };

    return (
        <>
            {
                // if the result length is greater than 0, 
                // show the search results
                results.length > 0

                    ?
                    // Search Results
                    <SearchResults results={results} title={anime} />

                    // else, show the search
                    :

                    // Search Section
                    <section className="search">

                        {/* Navbar  */}
                        <Navbar />

                        <div className="container">

                            <div className="anime__search">
                                <h1 className="anime__title">
                                    Anime<span className="anime__scraper">sukurepa</span>
                                </h1>

                                <h4 className="anime__subtitle">
                                    Find and download anime with ease
                                </h4>

                                <form onSubmit={AnimeSearch}>

                                    {/* Error Message */}
                                    <div className={formErr ? 'form-group' : 'd-none'}>
                                        <p className="alert alert-danger">{networkErr}</p>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="search__input"
                                            placeholder="What are you looking for?"
                                            onChange={handleAnimeChange}
                                            value={anime}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        {/* Disables the form when it has been clicked */}
                                        <button disabled={submitting} type="submit" className="search__btn">
                                            {
                                                submitting
                                                    ?
                                                    <span className="spinner-grow spinner-grow-md"></span>
                                                    :
                                                    <span>Submit</span>
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="anime__search__meta">
                                <p className="h5">Let us help you find anime with no sweat.</p>
                                <p className="h5">Tell us what you want and we'd bring it to you.</p>
                            </div>
                        </div>
                    </section>
                // end if-else condition
            }
        </>
    )
}

export default Home;