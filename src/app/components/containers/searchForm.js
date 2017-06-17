import React from 'react';


class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(e) {
    e.preventDefault();

    let searchInput = {
      topic   : this.refs.topic.value,
      startYr : this.refs.startYr.value,
      endYr   : this.refs.endYr.value
    };

    this.props.search(searchInput);
    this.refs.searchForm.reset();
  }


  render(){
    return (
        <div className="SearchForm container">
          <div className="row">
            <div className="col s12">

              <form ref='searchForm'>
                <div className="col m12">
                  <div className="row center-align">
                    <h4>Search</h4>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input ref="topic" placeholder="Topic" id="topic" type="text"  />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6">
                      <input ref="startYr" placeholder="Start Year" id="stat-year" type="date" className="datepiker" />
                    </div>

                    <div className="input-field col s6">
                      <input ref="endYr" placeholder="End Year" id="end-year" type="date" className="datepiker" />
                    </div>
                  </div>
                  <button  onClick={ this.performSearch } className="btn waves-effect waves-light " type="submit" name="action">
                    Search
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
    )
  }


}

export default SearchForm;