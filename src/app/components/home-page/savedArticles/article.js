import React from "react";


class Article extends React.Component {

  render () {

    return (
        <div className="row">
          <div className="card-panel hoverable">
            <div className="row valign-wrapper">
              <div className="col s8 left-align">
                <h5>Article Title</h5>
              </div>
              <div className="col s4 right-align">
                <button className="btn waves-effect waves-light " type="submit" name="action">
                  <i className="material-icons">add</i>
                </button>
              </div>
            </div>

          </div>

        </div>
    )

  }
}




export default Article;