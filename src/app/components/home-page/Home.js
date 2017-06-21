import React from "react";

import Search from "./search/search";
import Results from "./result/results";
import SavedArticles from "./savedArticles/savedArticles";

class Home extends React.Component {
  render () {

    return (

        <div className="Home ">
          <div className="row">

            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">NYT Scrubber!</a>
              </div>
            </nav>

          </div>

          <div className="container">
            <div className="row">
              <Search/>
            </div>
            <div className="row">
              <Results/>
            </div>
            <div className="row">
              <SavedArticles/>
            </div>
          </div>

        </div>

    )
  }
}


export default Home;


