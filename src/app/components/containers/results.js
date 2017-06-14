import React from "react";

import Result from "../presentation/result";

class Results extends React.Component {

  constructor () {
    super();
    this.state = {}
  }

  render () {

    return (
        <div className="row card-panel truncate">

          <div className="row center-align ">
            <h4>Results</h4>
          </div>

          <div className="col m12" >

            <Result/>

          </div>
        </div>
    )
  }
}



export default Results;