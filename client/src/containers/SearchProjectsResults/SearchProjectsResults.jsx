import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchProjectsResults from '../../components/SearchProjectsResults/SearchProjectsResults';
import updateProjectsResultsAction from '../../actions/SearchProjectsResults/updateProjectsResultsAction';
import updateProjectProfilePageAction from '../../actions/Profile/updateProjectProfilePageAction';

function mapStateToProps(state) {
  return {
    projectsResults: state.projectsResults,
    // projectSearchQuery: state.projectSearchQuery,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateProjectsResults: updateProjectsResultsAction,
    updateProjectProfilePage: updateProjectProfilePageAction,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchProjectsResults);
