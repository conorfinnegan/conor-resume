import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import About from './components/about';
import DublinExp from './components/dublinExp';
import TorontoExp from './components/torontoExp';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Certificates from './components/certificates';
import Summary from './components/summary';
import profilePic from './images/linkedInPic.jpg';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            section: <Summary />
        }
    }

    updateSection = (name) => {
        if (name === 'Summary') {
            this.setState({ section: <Summary /> });
        } else if (name === 'Experience') {
            this.setState({
                section: <div><div className="rela-block caps greyed">Experience & Work History</div><Experience /></div> });
        } else if (name === 'DublinExp') {
            this.setState({
                section: <div><div className="rela-block caps greyed">Experience & Work History</div><DublinExp />
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p></div> });
        } else if ((name === 'TorontoExp')) {
            this.setState({
                section: <div><div className="rela-block caps greyed">Experience & Work History</div><TorontoExp />
                    <p>&nbsp;</p>
                    <p>&nbsp;</p></div> });
        } else if (name === 'Education') {
            this.setState({ section: <Education /> });
        } else if (name === 'Skills') {
            this.setState({ section: <Skills /> });
        } else if (name === 'Certificates') {
            this.setState({ section: <Certificates /> });
        }
    }

    render() {
        return (
            <div className='App'>
                <>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet" type="text/css" />
                    <link href="https://fonts.googleapis.com/css?family=Raleway:100" rel="stylesheet" type="text/css" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
                    <div className="rela-block page">
                        <About>About</About >
                        <div className="rela-block content-container">
                            {this.state.section}
                        </div>
                        <div className="side-bar">
                            <div class=" rela-block fill mugshot">
                                <img alt='Conor' src={profilePic} />
                            </div>
                            {/*Links */}
                            <a className="rela-block social linked-in" href="https://www.linkedin.com/in/conor-finnegan-097322131/">LinkedIn</a>
                            <a className="rela-block social github" href="https://github.com/conorfinnegan">GitHub</a>
                            <a className="rela-block social download" href={require("./documents/resume.pdf")} download="Conor Finnegan Resume">Download resume</a>
                            {/*Summary */}
                            <p className="rela-block caps side-header" onClick={() => this.updateSection('Summary')}>About Me</p>
                            <p className="rela-block list-thing" onClick={() => this.updateSection('Summary')}>Summary</p>
                            <p className="rela-block list-thing" onClick={() => this.updateSection('Summary')}>Interests & Hobbies</p>
                            {/*Experience & Work History */}
                            <p className="rela-block caps side-header" onClick={() => this.updateSection('Experience')}>Experience & Work History</p>
                            <p className="rela-block list-thing" onClick={() => this.updateSection('DublinExp')}>Software Engineer at FINEOS Dublin - 06/2016 - 01/2018</p>
                            <p className="rela-block list-thing" onClick={() => this.updateSection('TorontoExp')}>Software Engineer at FINEOS Toronto - 01/2018 - Present</p>
                            {/*Education */}
                            <p className="rela-block caps side-header" onClick={() => this.updateSection('Education')}>Education</p>
                            <p className="rela-block list-thing" onClick={() => this.updateSection('Education')}>Higher Certificate in Business Management</p>
                            <p className="rela-block list-thing" onClick={() => this.updateSection('Education')}>B.S. Business Computing</p>
                            {/*Certificates */}
                            <p className="rela-block caps side-header" onClick={() => this.updateSection('Education')}>Certificates</p>
                            <p className="rela-block list-thing" onClick={() => this.updateSection('Education')}>SAFe Agile Certification</p>
                            <p className="rela-block list-thing" onClick={() => this.updateSection('Education')}>Docker from Basic to Advanced</p>
                            {/*Skills */}
                            <p className="rela-block caps side-header" onClick={() => this.updateSection('Skills')}>Skills</p>
                            <p className="rela-block list-thing" onClick={() => this.updateSection('Skills')}>Java, AWS, SQL, REST, JavaScript, Jenkins, Jquery, React, Agile Software Development, Communication & Collboration, Jira, Problem Resolution, Android Development, Algorithms and Data Structures</p>
                        </div>
                    </div>
                </>
            </div>
        );
    }
}

export default App;

