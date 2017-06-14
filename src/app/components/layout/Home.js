import React from "react";

import Style from "./styles";
import Search from "../containers/search";
import Results from "../containers/results";
import SavedArticles from "../containers/savedArticles";

class Home extends React.Component {
  render () {
    let style = Style;
    return (
        <div>

          <div className="col m12 flow-text" style={style.universal.border}>
            <h1>This div is 12-columns wide on all screen sizes</h1>
          </div>

          <div className="container" >
            <div className="row">

              <div className=" col m12" style={style.universal.border}>
                <Search />
              </div>

              <div className="col m12" style={style.universal.border}>
                <Results />
              </div>

              <div className="col m12" style={style.universal.border}>
                <SavedArticles />
              </div>

            </div>
          </div>
        </div>

    )
  }
}


export default Home;


