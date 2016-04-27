/**
 * Created by @krelix on 25/03/2016.
 */
import React from 'react';

import ProjectItem from './project-item';

export default class ProjectList extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <ProjectItem name="My little project" imagePath="assets/images/project_pic_120x120.png">
          This is some description for the project. It's not complete as it is nothing but a placeholder but I think it's better
          than a random Lorem Ipsum, since it's actual text I've written and i is far more likely to represent the kind of bullshit
          I'll write for real.
        </ProjectItem>
      </div>
    );
  }
}
