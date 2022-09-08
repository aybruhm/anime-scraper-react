// React Imports
import React from 'react';

// Style Imports
import "./search_results.css";

// Component Imports
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


const SearchResults = ({ results, title }) => {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>
            <section className="search__results">

                {/* Navbar */}
                <Navbar />
                {/* End of Navbar */}

                <div className="results container">
                    <div className="results__head">
                        <h4 className="result__title">
                            Search <span className="anime__scraper">Results</span>
                        </h4>
                        <p className="h5">These are the results we found bearing the name: <b>“{title}”</b></p>
                
                        <h5 className="result__home mb__d-none" onClick={refreshPage}>Go back <i class="fa fa-home" aria-hidden="true"></i>
                        </h5>
                    </div>

                    <div className="results__row row">
                        {results.map((result) => (
                            <div className="result__col col-lg-6 col-md-6" key={result.id}>
                                <div className="head">
                                    <img src={result.image_src} alt={result.image_alt} className="img-responsive" />
                                </div>

                                <div className="body">
                                    <h4 className="anime__result__title">
                                        {result.title}
                                    </h4>

                                    <p className="anime__result__mute">
                                        {result.release}
                                    </p>

                                    <a href={result.anime_link} className="anime__result__link">
                                        Click to continue <i className="fa fa-link" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        )
                        )}
                    </div>

                    <div className="result__meta">
                        <p className="h5">
                            This is all we found. Click which ever you want and there you go.
                        </p>

                        <h5 className="result__home mb__lg-none" onClick={refreshPage}>Go back <i class="fa fa-home" aria-hidden="true"></i>
                        </h5>
                    </div>
                </div>


                {/* Footer */}
                <Footer />
                {/* End of Footer */}

            </section>
        </div>
    )
}

export default SearchResults;