import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitbucket, faCodepen, faDev, faDigitalOcean, faDocker, faFreeCodeCamp, faGithub, faGitlab, faMedium, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

// TODO: component for a project, e.g. github or personal profile etc.
// TODO:     It will extract the base URL to determine the icon to show
// TODO:     nice things: it's reusable for Education, Projects, etc.
export class CodeProject extends Component {
    render() {
        let url = this.props.url ? this.props.url : '#';
        let icon;
        if (url.includes('github')) {
            icon = <FontAwesomeIcon icon={faGithub} />;
        } else if (url.includes('gitlab')) {
            icon = <FontAwesomeIcon icon={faGitlab} />;
        } else if (url.includes('bitbucket')) {
            icon = <FontAwesomeIcon icon={faBitbucket} />;
        } else if (url.includes('digitalocean')) {
            icon = <FontAwesomeIcon icon={faDigitalOcean} />;
        } else if (url.includes('hub.docker')) {
            icon = <FontAwesomeIcon icon={faDocker} />;
        } else if (url.includes('npm')) {
            icon = <FontAwesomeIcon icon={faNpm} />;
        } else if (url.includes('codepen')) {
            icon = <FontAwesomeIcon icon={faCodepen} />;
        } else if (url.includes('freecodecamp')) {
            icon = <FontAwesomeIcon icon={faFreeCodeCamp} />;
        } else if (url.includes('dev.to')) {
            icon = <FontAwesomeIcon icon={faDev} />;
        } else if (url.includes('medium')) {
            icon = <FontAwesomeIcon icon={faMedium} />;
        } else {
            icon = <FontAwesomeIcon icon={faCode} />;
        }
        return (
            <a href={url} className='inline-icon-link'>{icon} {this.props.description}</a>
        );
    }
}
