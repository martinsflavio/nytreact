import React from "react";

import Article from "./article";

class SavedArticles extends React.Component {

  constructor () {
    super();
    this.state = {}
  }

  render () {

    return (
        <div className="SavedArticles container">
          <div className="row card-panel truncate">

            <div className="row center-align ">
              <h4>Saved Articles</h4>
            </div>

            <div className="col m12" >

              <Article />

            </div>
          </div>
        </div>
    )
  }
}



export default SavedArticles;