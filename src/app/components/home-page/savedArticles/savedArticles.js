import React from "react";

import Article from "./article";

class SavedArticles extends React.Component {
  constructor (props) {
    super(props);

  }



  render () {

    const articleElement = this.props.results.map(article => {
      return ( <Article key={ article._id } destroyArticle={ this.props.destroyArticle } articleObj={ article } /> )
    });


    return (
        <div className="SavedArticles">
          <div className="row ">

            <div className="row center-align ">
              <h4>Saved Articles</h4>
            </div>

              { articleElement }

          </div>
        </div>
    )
  }
}



export default SavedArticles;