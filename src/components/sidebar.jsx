import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Jeffrey Jeyachandren</a></h1>

              <span className="email">CISSP, Master's Cybersecurity (Expected Apr 2025)</span>
              <p>    </p>
              <p>    </p>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">Projects</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Awards</a></li>
                  <p>    </p>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <p>    </p>
              <ul>
                <li><a href="https://www.linkedin.com/in/jeffreyjeyachandren/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/JeffinWithYa" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
              <p>    </p>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                <i className="icon-heart" aria-hidden="true" /> <i className="icon-coffee" aria-hidden="true"></i><br></br>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
