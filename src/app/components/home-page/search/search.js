import React from "react";

import SearchForm from './searchForm';
import Results from '../result/results';
import Helper from '../../../utils/helpers';
const Api = new Helper();

class Search extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      search: {
        topic : '',
        startYr : '',
        endYr : '',
      },
      searchResults:[],
    };
    this.search = this.search.bind(this);
    this.storeArticle = this.storeArticle.bind(this);
  }

  /*custom functions*/

  search(searchInput){

    Api.runQuery(searchInput).then(result => {
      const articles = result.data.response.docs;

      this.setState({
        searchResults: articles
      });

    }).catch(err => {
      console.log(err);
    });
  }

  storeArticle(article){
    Api.saveArticle(article)
  }



  render () {

    return (
        <div className="Search container">
          <div className="row card-panel truncate">
            <SearchForm search={ this.search } />
          </div>
          <div className="row card-panel truncate">
            <Results storeArticle={ this.storeArticle } results={ this.state.searchResults } />
          </div>
        </div>

    )

  }
}




export default Search;




