import React from 'react';
import PropTypes from 'prop-types';
import './individualProjectResult.css';

class IndividualProjectResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interview: this.props.element.interview,
      showDesc: this.props.element.showDesc,
    };

    this.redirectProject = this.redirectProject.bind(this);
    this.toggleInterview = this.toggleInterview.bind(this);
  }

  redirectProject() {
    // console.log('BUTTON HIT, ', this.props.updateProject);
    // console.log('EVENT: ', this.props.element.name)
    this.props.updateProject(this.props.element.name);
    this.props.history.push(`/project/${this.props.element.name}`)
  }

  toggleInterview() {
    this.setState({ interview: !this.state.interview });
  }

  render() {
    return (
      <div className="individualProject">
        <div className="searchProject-projectImg">
          <img
            src={this.props.element.projectImage}
            alt={this.props.element.name}
            height="100"
          />
        </div>
        <div className="searchProject-projectInfo" >
          <span onClick={this.redirectProject}>
            <strong> {this.props.element.name} </strong>
          </span>
          <button className="btn-interview" onClick={this.toggleInterview}>
            {this.state.interview ? 'Interview Sent' : 'Interview'}
          </button> <br />
          <span> {this.props.element.projectDesc} </span>
        </div>
      </div>
    );
  }
}

export default IndividualProjectResult;

IndividualProjectResult.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
