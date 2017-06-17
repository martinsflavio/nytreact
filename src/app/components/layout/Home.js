import React from "react";


import Search from "../containers/search";
import Results from "../containers/results";
import SavedArticles from "../containers/savedArticles";

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

          <div className="row">

            <Search />

          </div>


        </div>

    )
  }
}


export default Home;


