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
    console.log('BUTTON HIT, ', this.props.updateProject);
    // console.log('EVENT: ', this.props.element.name)
    this.props.updateProject(this.props.element.name);
    this.props.history.push(`/username/project/${this.props.element.name}`)
  }

  toggleInterview() {
    console.log(this.props)
    this.setState({ interview: !this.state.interview });
  }

  render() {
    return (
      <div className="individualProject">
        <div className="searchProject-projectImg">
          <img id="projectImage"
            src={this.props.element.imageurl}
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
        <span>{this.props.element.description}</span>
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
