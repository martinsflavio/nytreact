import React from "react";


class Article extends React.Component {
  constructor(props){
    super(props);
    this.performDestroyArticle = this.performDestroyArticle.bind(this);
  }

  performDestroyArticle(){
    this.props.destroyArticle(this.props.articleObj);
  }


  render () {

    return (
        <div className="Article">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <a  target="_blank" href={ this.props.articleObj.url } >
                    { this.props.articleObj.title }
                  </a>
                </div>
                <div className="card-action">
                  <span className="left-align"></span>
                  <div className="right-align">
                    <button onClick={ this.performDestroyArticle } className="btn waves-effect waves-light " type="submit" name="action">
                      Save Article
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

    )

  }
}




export default Article;