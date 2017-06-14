import React from "react";


class Search extends React.Component {
  constructor () {
    super();
    this.state = {}
  }

  render () {
    return (
        <div className="row card-panel truncate">

          <div className="col m12">
            <div className="row center-align">
              <h4>Search</h4>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input type="text" id="autocomplete-input" className="autocomplete" />
                <label v-for="autocomplete-input">Topic</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Start Year" id="stat-year" type="date" className="validate" />
              </div>

              <div className="input-field col s6">
                <input placeholder="Start Year" id="stat-year" type="date" className="validate" />
              </div>
            </div>
          </div>
        </div>
    )

  }
}




export default Search;