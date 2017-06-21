import React from "react";

import SearchForm from './searchForm';
import Results from '../result/results';
import SavedArticles from '../savedArticles/savedArticles';
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
      savedArticles:[]
    };
    this.search = this.search.bind(this);
    this.storeArticle = this.storeArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.destroyArticle = this.destroyArticle.bind(this);
  }

  componentDidMount(){
    this.getArticles();
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
    Api.saveArticle(article);
    this.getArticles();
  }

  destroyArticle(article){
    Api.destroyArticle(article);
    this.getArticles();
  }

  getArticles(){
    Api.getArticles().then(result => {
      const savedArticles = result.data.body;
      this.setState({
        savedArticles: savedArticles,
      });
    });
  }

  render () {

    return (
        <div className="Search">

          <div className="row card-panel truncate">
            <SearchForm search={ this.search } />
          </div>

          <div className={this.state.searchResults.length > 0 ? 'row card-panel truncate' : 'hide'}>
            <Results storeArticle={ this.storeArticle } results={ this.state.searchResults } />
          </div>

          <div className={this.state.savedArticles.length > 0 ? 'row card-panel truncate' : 'hide'}>
            <SavedArticles destroyArticle={ this.destroyArticle } results={ this.state.savedArticles } />
          </div>

        </div>

    )

  }
}




export default Search;




