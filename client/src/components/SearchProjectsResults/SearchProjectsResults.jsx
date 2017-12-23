import React from 'react';
import PropTypes from 'prop-types';
import IndividualResult from './IndividualProjectResult';
import './SearchProjectResulst.css';

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
      <div id="allprojects">
        <h5 id="results-title"> Results for {this.state.query} </h5>
        {this.state.search.map((element, index) => (
          <div key={index} id="projects">
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
