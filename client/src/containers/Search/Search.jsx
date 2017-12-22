import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../../components/NavBar/Search/Search';
import updateProjectsResultsAction from '../../actions/SearchProjectsResults/updateProjectsResultsAction';

// function mapStateToProps(state) {
//   return {
//     projectsResults: state.projectsResults,
//   };
// }

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateProjectsResults: updateProjectsResultsAction,
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(Search);
