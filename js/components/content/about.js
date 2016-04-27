/**
 * Created by @krelix on 25/03/2016.
 */
import React from 'react';

import ALink from './alink';

export default function render() {
  return (
    <article>
      <header>
        <h1>About</h1>
      </header>
      <div className="entry-content">
        <p>Hello, my name is Adrien. I've been a developer for 5 years. I've mostly worked with Java and J2EE,
          but I've been dabbling lately with JavaScript and NodeJS using React.</p>
        <p>I've worked on developing and maintaining Document Managment systems, Business Process software for clients.
          Most of those projects involved working with specialized software on top of which we built a WebApp, using
          J2EE
          and
          Spring. I've also used and set up a Continuous Integration system using&nbsp;
          <ALink src="http://jenkins.io">Jenkins</ALink>, <ALink src="http://www.sonarqube.org/">Sonar</ALink>
          , <ALink src="http://www.sonatype.org/nexus/">Nexus</ALink> and <ALink
            src="https://www.jfrog.com/artifactory/oss">Artifactory</ALink>.</p>
        <p>In my spare time, I spend a lot of time playing video games, and I've dabbled in game dev using AS3,
          JavaScript
          (and the Phaser framework),
          though not seriously enough to have anything done.
          I'm currently learning <ALink src="http://rust-lang.org/">Rust</ALink> and I try to keep an eye on many things
          related to development,
          be they UX, Design, Team Management, Project Management Methodologies and more.</p>
      </div>
    </article>
  );
}
