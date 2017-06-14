import React from "react";


import Search from "../containers/search";
import Results from "../containers/results";
import SavedArticles from "../containers/savedArticles";

class Home extends React.Component {
  render () {

    return (
        <div>
          <div className="row">
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">NYT Scrubber!</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="container">
            {/* Search Component */}
            <Search />

            {/* Result Component */}
            <Results />

            {/* Saved-Articles Component */}
            <SavedArticles />

          </div>
        </div>

    )
  }
}


export default Home;


