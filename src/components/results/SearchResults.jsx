import React from 'react';
import "./search_results.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

// Image imports
import naruto_movie from "../images/naruto-the-movie.png";
import naruto_movie_two from "../images/naruto-the-movie-two.png";
import naruto_movie_three from "../images/naruto-the-movie-three.png";
import naruto_shippuden from "../images/naruto-shippuden.png";
import naruto_shippuden_two from "../images/naruto-shippuden-two.png";
import naruto_shippuden_three from "../images/naruto-shippuden-three.png";


const SearchResults = () => {
    return (
        <div>
            <section className="search__results">

                {/* Navbar */}
                <Navbar />
                {/* End of Navbar */}


                <div className="results container">
                    <div className="results__head">
                        <h2 className="result__title">
                            Search <span className="anime__scraper">Scraper</span>
                        </h2>
                        <p className="h5">These are the results we found bearing the name “Naruto the movie”</p>
                    </div>

                    <div className="results__row row">
                        <div className="result__col col-lg-6 col-md-6">
                            <div className="head">
                                <img src={naruto_movie} alt="naruto-the-movie" className="img-responsive" />
                            </div>

                            <div className="body">
                                <h4 className="anime__result__title">
                                    Naruto the Movie: Ninja Clash in the Land of Snow (2004)
                                </h4>

                                <p className="anime__result__mute">
                                    https://www.imdb.com/name/nm0645513/?ref_=ttls_li_dr_0of
                                </p>

                                <a href="" className="anime__result__link">
                                    Click to continue <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                        <div className="result__col col-lg-6 col-md-6">
                            <div className="head">
                                <img src={naruto_movie_two} alt="naruto-the-movie" className="img-responsive" />
                            </div>

                            <div className="body">
                                <h4 className="anime__result__title">
                                    Naruto the Movie 2: Legend of the Stone of Gelel (2005)
                                </h4>

                                <p className="anime__result__mute">
                                    https://www.imdb.com/name/nm0645513/?ref_=ttls_li_dr_0of
                                </p>

                                <a href="" className="anime__result__link">
                                    Click to continue <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                        <div className="result__col col-lg-6 col-md-6">
                            <div className="head">
                                <img src={naruto_movie_three} alt="naruto-the-movie" className="img-responsive" />
                            </div>

                            <div className="body">
                                <h4 className="anime__result__title">
                                    Naruto the Movie 3: Guardians of the Crescent Moon Kingdom (2006)
                                </h4>

                                <p className="anime__result__mute">
                                    https://www.imdb.com/name/nm0645513/?ref_=ttls_li_dr_0of
                                </p>

                                <a href="" className="anime__result__link">
                                    Click to continue <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                        <div className="result__col col-lg-6 col-md-6">
                            <div className="head">
                                <img src={naruto_shippuden} alt="naruto-the-movie" className="img-responsive" />
                            </div>

                            <div className="body">
                                <h4 className="anime__result__title">
                                    Naruto Shippûden: The Movie (2007)
                                </h4>

                                <p className="anime__result__mute">
                                    https://www.imdb.com/name/nm0645513/?ref_=ttls_li_dr_0of
                                </p>

                                <a href="" className="anime__result__link">
                                    Click to continue <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                        <div className="result__col col-lg-6 col-md-6">
                            <div className="head">
                                <img src={naruto_shippuden_two} alt="naruto-the-movie" className="img-responsive" />
                            </div>

                            <div className="body">
                                <h4 className="anime__result__title">
                                    Naruto Shippuden: The Movie - Bonds (2008)
                                </h4>

                                <p className="anime__result__mute">
                                    https://www.imdb.com/name/nm0645513/?ref_=ttls_li_dr_0of
                                </p>

                                <a href="" className="anime__result__link">
                                    Click to continue <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                        <div className="result__col col-lg-6 col-md-6">
                            <div className="head">
                                <img src={naruto_shippuden_three} alt="naruto-the-movie" className="img-responsive" />
                            </div>

                            <div className="body">
                                <h4 className="anime__result__title">
                                    Naruto Shippûden: The Movie 3: Inheritors of the Will of Fire (2009)
                                </h4>

                                <p className="anime__result__mute">
                                    https://www.imdb.com/name/nm0645513/?ref_=ttls_li_dr_0of
                                </p>

                                <a href="" className="anime__result__link">
                                    Click to continue <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="result__meta">
                        <p className="h5">
                            This is all we found. Click which ever you want and there you go.
                        </p>
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