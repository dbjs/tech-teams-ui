import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, Collapsible, CollapsibleItem} from 'react-materialize'
import { Link, Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import './CurrentProjects.css';

class CurrentProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjects: this.props.currentProjects,
    }

    this.selectProject = this.selectProject.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { currentProjects } = nextProps;
    this.setState({
      currentProjects,
    })
  }

  selectProject(element) {
    // PROB DON'T NEED THE BELOW VARIABLE FOR THIS, BUT KEEP JUST IN CASE
    // const grabDiv = document.getElementById(`prof-completed-${element.projName}`).getAttribute('index');
    this.props.updateProjectProfilePage(element.project);
    this.props.history.push(`/username/project/${element.project}`)
  }

  render() {
    return (
      <div id="currentProjects-container">
        Projects <br />
        <div id="newdivider"> </div>
        <div id="brendan">{
          this.state.currentProjects.map((element, index) => (
            <div
            key={index}
            id="project"
            index={index}
            onClick={() => this.selectProject(element)}
            >
            <div id="main">
              <span id="image">
                <img id="projimg" src={element.imageurl || "https://c1.staticflickr.com/2/1071/1106852126_b3eadf6da6.jpg"} />
              </span>
              <span>
                {element.project}
              </span>
            </div>
            <div id="desc">
              {element.projectdescription}
            </div>
            </div>
          ))
        }</div>
      </div>
    );
  }
}


export default CurrentProjects;

CurrentProjects.propTypes = {
  currentProjects: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
