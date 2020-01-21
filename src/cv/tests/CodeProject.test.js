import React from 'react';
import { shallow } from 'enzyme';
import { CodeProject } from '../CodeProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitbucket, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

it('renders a link', () => {
    let wrapper = shallow(<CodeProject />);
    const link = wrapper.find('a');
    expect(link.length).toBe(1); // Exactly one element found
    wrapper.unmount();
});

it('shows a GitHub/bitbucket icon when the project is on that website', () => {
    let wrapper = shallow(<CodeProject url='http://github.com/myname/myproject' />);
    expect(wrapper.contains(<FontAwesomeIcon icon={faGithub} />)).toBeTruthy();
    wrapper.unmount();
    wrapper = shallow(<CodeProject url='http://bitbucket.com/account/myname/project/myproject' />);
    expect(wrapper.contains(<FontAwesomeIcon icon={faBitbucket} />)).toBeTruthy();
    wrapper.unmount();
});

it('shows the default icon when the URL is unknown', () => {
    let wrapper = shallow(<CodeProject url='http://mypersonalwebsite.net' />);
    expect(wrapper.contains(<FontAwesomeIcon icon={faCode} />)).toBeTruthy();
    wrapper.unmount();
});

it('displays the description of the project', () => {
    let wrapper = shallow(<CodeProject description={'I made this project'} />);
    expect(wrapper.text()).toContain('I made this');
    wrapper.unmount();
});
