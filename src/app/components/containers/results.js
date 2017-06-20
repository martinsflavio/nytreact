import React from "react";

import Result from "./presentation/result";

class Results extends React.Component {

  constructor (props) {
    super(props);
    this.state = {results:[]}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ results: nextProps.results });
  }


  render () {

    const articleElement = this.state.results.map(article => {
      return ( <Result key={ article._id } storeArticle={ this.props.storeArticle } articleObj={ article } /> )
    });

    return (
        <div className="Results container">
          <div className="row">

            <div className="row center-align ">
              <h4>Results</h4>
            </div>

            <div className="col m12" >
              { articleElement }
            </div>
          </div>

        </div>

    )
  }
}



export default Results;