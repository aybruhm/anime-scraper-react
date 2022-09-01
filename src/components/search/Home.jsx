import React from 'react';
import "./main.css";
import Navbar from '../navbar/Navbar';


const Home = () => {
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
                            Anime <span className="anime__scraper">Scraper</span>
                        </h1>

                        <h4 className="anime__subtitle">
                            Find and download anime with ease
                        </h4>

                        <form method="post">
                            <div className="form-group">
                                <input type="text" className="search__input" placeholder="What are you looking for?" />
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
        </>
    )
}

export default Home;