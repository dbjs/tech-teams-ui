import React from 'react';
import PropTypes from 'prop-types';
import IndividualResult from './IndividualProjectResult';

class SearchProjectsResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // THIS NEEDS TO BE CHANGED ONCE THE NAV SEARCH BAR IS ABLE TO INTERACT WITH REDUX
      search: this.props.projectsResults.data.body,
      query: this.props.projectsResults.data.query,
    };
  }

  componentWillMount() {
    console.log('SEARCH RESULTS: ', this.props.projectsResults.data)
    // console.log('NEXTPROPS ', nextProps)
    // this.setState({
    //   search: this.props.projectsResults.data.body,
    //   query: this.props.projectResults.data.query
    // })
  }

  render() {
    return (
      <div>
        <br />
        <h5> Results for {this.state.query} </h5>
        ---------------------------------------------------- <br />
        {this.state.search.map((element, index) => (
          <div key={index}>
            <IndividualResult
              element={element}
              position={index}
              history={this.props.history}
              updateProject={this.props.updateProjectProfilePage}
            />
          </div>
          ))}
      </div>
    );
  }
}

export default SearchProjectsResults;

SearchProjectsResults.propTypes = {
  projectsResults: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
