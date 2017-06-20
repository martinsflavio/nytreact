import React from "react";


class Result extends React.Component {
  constructor(props){
    super(props)

  }


  render(){


    return (
        <div className="Result">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <a  target="_blank" href={ this.props.articleObj.web_url } >
                    { this.props.articleObj.headline.main }
                  </a>

                </div>
                <div className="card-action">
                  <span className="left-align">{ this.props.articleObj.pub_date }</span>
                  <div className="right-align">
                      <button onClick={ ()=> this.props.storeArticle( this.props.articleObj ) } className="btn waves-effect waves-light " type="submit" name="action">
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


export default Result;