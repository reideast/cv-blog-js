import React, {Component} from 'react';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

// Resume/CV using CSS Grid, see: https://css-tricks.com/new-year-new-job-lets-make-a-grid-powered-resume/
export class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main id='cv-wrapper'>
                <article className='cv-grid-container'>
                    <CVName />
                    <CVPhoto />
                    <CVAbout />
                    <CVWorkExperience />
                    <CVEducation />
                    <CVCommunity />
                    <CVSkills />
                </article>
            </main>
        );
    }
}

export class CVName extends Component {
    render() {
        return (
            <section className='cv-grid-section-name cv-grid-section'>
                <h1>Andrew Reid East</h1>
                <CVContactHeader />
            </section>
        );
    }
}

class CVContactHeader extends Component {
    render() {
        return (
            <div>
                <cv-contacts>
                    <cv-email>{/* icon:email */}andrew@andreweast.net</cv-email>
                    <cv-location>{/* icon:globe/location */}Galway, Ireland</cv-location>
                    <cv-web-portfolio>{/* icon:email */}andreweast.net/portfolio</cv-web-portfolio>
                    <cv-web-github>{/* icon:github */}github.com/reideast</cv-web-github>
                    <cv-web-linkedin>{/* icon:linkedin */}linkedin.com/in/andrewreideast</cv-web-linkedin>
                    <cv-web-twitter>{/* icon:twitter */}deskase</cv-web-twitter>
                    <cv-web-aboutme>{/* icon:aboutme */}andrewreideast</cv-web-aboutme>
                </cv-contacts>
            </div>
        );
    }
}

class CVPhoto extends Component {
    render() {
        return (
            <section className='cv-grid-section-photo cv-grid-section'>
                <img className='cv-photo img-circle' src='img/cv/headshot.jpg' alt='Headshot of person in CV' />
            </section>
        );
    }
}

class CVAbout extends Component {
    render() {
        return (
            <section className='cv-grid-section-about cv-grid-section'>
                <p>Hello world, I'm Andrew. I like coding, I'm nerdy about a lot of stuff, and I putting together this web site now!</p>
                <p>Graduate software engineer with a lifelong enthusiasm for coding along with ten years of proven IT experience</p>
            </section>
        );
    }
}

class CVWorkExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null,
            apiFetchCompleted: false,
            apiFetchFailureMessage: ''
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch(REACT_APP_API_URL + '/cv/job');
            if (res.status >= 400) {
                throw new Error('API Failure');
            }
            const result = await res.json();
            this.setState({ jobs: result, apiFetchCompleted: true });
        } catch (err) {
            console.error('API fetch failure', err); // DEBUG
            this.setState({ apiFetchFailureMessage: 'API fetch failure', apiFetchCompleted: true });
        }
    }

    render() {
        // Looping over JSON to make DOM elements, See: https://reactjs.org/docs/getting-started.html
        // TODO: Don't use the inline conditional, separate out into variables
        return (
            <section className='cv-grid-section-work cv-grid-section'>
                <h2>Work Experience</h2>
                {(this.state.apiFetchCompleted) ? (
                    (this.state.jobs) ? (
                        <dl>
                            {this.state.jobs.map((item, index) => {
                                return index; // TODO
                            })}
                        </dl>
                    ) : (
                        <div className='api-failure'>
                            {this.state.apiFetchFailureMessage}
                        </div>
                    )
                ) : (
                    <div>Loading...</div>
                )}
                <div id='api-test-result' className={this.state.apiStatusSuccess ? 'api-success' : 'api-failure'}>
                    <p>{this.state.apiResponse || 'Loading...'}</p>
                </div>



                <dl>
                    <dt><cv-date-circa>2019-Current</cv-date-circa></dt>
                    <dd>
                        <cv-company>IBM</cv-company>
                        <cv-job-title>Software Engineer</cv-job-title>
                        <cv-location>Galway, Ireland</cv-location>
                        <ul>
                            <li>Development of enterprise security management software</li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2018-2019</cv-date-circa></dt>
                    <dd>
                        <cv-company>IBM</cv-company>
                        <cv-job-title>Software Engineering Intern</cv-job-title>
                        <cv-location>Galway, Ireland</cv-location>
                        <ul>
                            <li>Developed a Java EE app presented in a TypeScript frontend in an international team</li>
                            <li>Wrote a Java service deployed using Apache Common Daemon</li>
                            <li>Created automated end-to-end test harness to verify SSL connections & certificates</li>
                            <li>Developed automated UI tests in Selenium, API tests in Spock, Unit tests in Junit & Jasmine</li>
                            <li>Created fixes for frontend defects in the Marionette framework</li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2017-2017</cv-date-circa></dt>
                    <dd>
                        <cv-company>Ericsson LMI</cv-company>
                        <cv-job-title>Software Engineering Intern</cv-job-title>
                        <cv-location>Athlone, Ireland</cv-location>
                        <ul>
                            <li>Worked on an agile team on a JavaScript and JavaEE on the Ericsson Network Manager</li>
                            <li>Developed production stories for GUI frontend, merged after code review</li>
                            <li>Wrote behaviour-driven automated UI tests</li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2012-2015</cv-date-circa></dt>
                    <dd>
                        <cv-company>Tech Data</cv-company>
                        <cv-job-title>Quality Assurance Technician II</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li>Developed scripts to automate technician’s workflows. Took initiative to identify inefficiencies, proposed improvement to management, and implemented it</li>
                            <li>Wrote automated installation script to customise applications on domain PCs, increasing production throughput, directly leading to increase larger in contract size</li>
                            <li>Responsible for ISO standards of 5-10 techs assembling desktop, laptop, server, and networking hardware, deploying system software</li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2009-2012</cv-date-circa></dt>
                    <dd>
                        <cv-company>Office Depot, Inc.</cv-company>
                        <cv-job-title>Customer Services Specialist II</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li>Innovated by implementing new diagnostic protocols for services sales team using PC Doctor tool and directly increased sales of hardware repair services</li>
                            <li>Designed improved marketing materials for customer check in district-wide, streamlined customer process and increased sales of add-on services</li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2007-2009</cv-date-circa></dt>
                    <dd>
                        <cv-company>Circuit City</cv-company>
                        <cv-job-title>Lead PC Technician</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li>Managed technical service centre operations after promotion within three months</li>
                            <li>Developed new procedures to improve technician standard operating procedures, designed to keep personnel focused on repairs and customer communication</li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2005-2007</cv-date-circa></dt>
                    <dd>
                        <cv-company>CompUSA</cv-company>
                        <cv-job-title>Service Writer</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li>Provided first level help desk support with retail customers in person and over the phone</li>
                            <li>Trained by technicians for hardware and software repairs of PC and Apple computers</li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2003-2004</cv-date-circa></dt>
                    <dd>
                        <cv-company>San Diego Zoological Society's Wild Animal Park</cv-company>
                        <cv-job-title>Visitor Assistance Officer</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li>Customer service and crowd control</li>
                            <li>Junior security duties</li>
                            <li>Fed giraffes</li>
                        </ul>
                    </dd>
                </dl>
            </section>
        );
    }
}

class CVEducation extends Component {
    render() {
        return (
            <section className='cv-grid-section-education cv-grid-section'>
                <h2>Education</h2>
                <dl>
                    <dt><cv-date-circa>2016-2019</cv-date-circa></dt>
                    <dd>
                        <cv-degree>Bachelor of Science (Honours), Computer Science</cv-degree>
                        <cv-school>National University of Ireland, Galway</cv-school>
                        <cv-location>Galway, Ireland</cv-location>
                        <cv-thesis>{/* icon:github */}Thesis Project: Genetic algorithm to schedule a timetable using machine learning in Java EE presented as a React app deployed to AWS, EC2, and an RDS Postgres database</cv-thesis>
                        <cv-grades>First-class Honours: overall marks 90.18% (A+ equivalent)</cv-grades>
                        <ul>
                            <li>Java Data Structures & Algorithms A</li>
                            <li>Software Engineering A+</li>
                            <li>Databases A+</li>
                            <li>Discrete Maths A+</li>
                            <li>AI A</li>
                            <li>Machine Learning A+</li>
                            <li>Cryptography A+</li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2014-2015</cv-date-circa></dt>
                    <dd>
                        <cv-degree>Associate of Science, Computer Science</cv-degree>
                        <cv-school>Riverside City College</cv-school>
                        <cv-location>California, United States</cv-location>
                        <cv-thesis>{/* icon:github */}Dean's List Honours: (Overall 97.8%)</cv-thesis>
                        <cv-grades>Searchable database web app in PHP and MySQL</cv-grades>
                        <ul>
                            <li>Systems Analysis</li>
                            <li>Programming in C++</li>
                            <li>Java</li>
                            <li>PHP</li>
                            <li>Operating Systems</li>
                            <li>Data Structures</li>
                            <li>Cisco Networking Academy</li>
                        </ul>
                    </dd>
                </dl>
            </section>
        );
    }
}

// class CVProjects extends Component {
//     render() {
//         // TODO: This is not used, nor is it placed in the Grid via CSS
//         return (
//             <section className='cv-grid-section-community cv-grid-section'>
//                 <h2>Technical Projects</h2>
//                 <dl>
//                     <dt>Media upload and collaboration app in JavaScript, continuous integration on Travis CI</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                     <dt>Professional portfolio website for client using responsive Bootstrap</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                     <dt>Content management system built using vanilla PHP</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                     <dt>Interactive games for online design boot camp in JavaScript</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                     <dt>Wedding RSVP website with user management backend in PHP</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                 </dl>
//             </section>
//         );
//     }
// }

/*
Hobbies
Maker DIY hardware and software hacking, tabletop RPGs, hiking and camping
Volunteering with Digital Champions at NUI Galway to teach digital literacy essentials

Professional Competencies
<strong>Analytical thinking</strong> with talent for identifying and streamlining complex processes
Proven aptitude recognising gaps in knowledge and <strong>taking initiative to learn</strong> and certify in large array of concepts quickly
<strong>Customer relations</strong> expertise gained through 6 years of retail tech support
<strong>Supervisor</strong> of department of 4 technicians at Circuit City; oversaw 5-10 at Tech Data
Exceptional <strong>communication</strong>; can rapidly assimilate information and convey it to others
Flexible <strong>team player</strong> able to work effectively in a large team or <strong>independently</strong> directed
 */

class CVCommunity extends Component {
    render() {
        return (
            <section className='cv-grid-section-community cv-grid-section'>
                <h2>Professional Memberships and Certifications</h2>
                <dl>
                    <dt><cv-organization>Association for Computing Machinery (ACM)</cv-organization></dt>
                    <dd><cv-date-circa>since 2015</cv-date-circa></dd>
                    <dt>Google Developers Group Galway</dt>
                    <dt>CompSoc, Vice-Auditor NUI Galway</dt>
                    <dt>Digital Champions, NUI Galway</dt>
                    <dd>Cisco Certified Networking Associate (CCNA)</dd>
                    <dt>
                        <cv-date-circa>2013</cv-date-circa>
                        <div>Routing and Switching</div>
                    </dt>
                    <dd>CompTIA A+ Certification</dd>
                    <dt>
                        <cv-date-circa>Computer Technician</cv-date-circa>
                        <div>2011</div>
                    </dt>
                </dl>
            </section>
        );
    }
}

class CVSkills extends Component {
    render() {
        return (
            <section className='cv-grid-section-skills cv-grid-section'>
                <h2>Technical Skills</h2>
                <dl>
                    <dt>Programming Languages</dt>
                    <dd>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>PostgreSQL</li>
                            <li>C</li>
                            <li>bash</li>
                        </ul>
                    </dd>
                    <dt>Coding tools</dt>
                    <dd>
                        <ul>
                            <li>git</li>
                            <li>vim</li>
                            <li>AWS</li>
                            <li>IntelliJ</li>
                            <li>Gradle</li>
                            <li>Jira</li>
                        </ul>
                    </dd>
                    <dt>IT Systems Admin</dt>
                    <dd>
                        <ul>
                            <li>Windows 10,8,7,XP</li>
                            <li>Windows Server 2012</li>
                            <li>RHEL</li>
                            <li>CentOS</li>
                            <li>Cisco hardware & IOS</li>
                            <li>Rack-mount server hardware</li>
                        </ul>
                    </dd>
                    <dt>Office Skills</dt>
                    <dd>
                        <ul>
                            <li>Excel</li>
                            <li>Access</li>
                            <li>Publisher</li>
                            <li>Word</li>
                            <li>Visio</li>
                            <li>Typing 80 WPM</li>
                        </ul>
                    </dd>
                </dl>
            </section>
        );
    }
}
