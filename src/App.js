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
            this.setState({ section: <Experience /> });
        } else if (name === 'DublinExp') {
            this.setState({ section: <DublinExp /> });
        } else if ((name === 'TorontoExp')) {
            this.setState({ section: <TorontoExp /> });
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
                            <a className="rela-block social github" href="https://www.linkedin.com/in/conor-finnegan-097322131/">LinkedIn</a>
                            <a className="rela-block social linked-in" href="https://pluralsight.com">GitHub</a>
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
                            <p className="rela-block list-thing">Higher Certificate in Business Management</p>
                            <p className="rela-block list-thing">B.S. Business Computing</p>
                            {/*Certificates */}
                            <p className="rela-block caps side-header" onClick={() => this.updateSection('Education')}>Certificates</p>
                            <p className="rela-block list-thing">SAFe Agile Certification</p>
                            <p className="rela-block list-thing">Docker from Basic to Advanced</p>
                            {/*Skills */}
                            <p className="rela-block caps side-header" onClick={() => this.updateSection('Skills')}>Skills</p>
                            <p className="rela-block list-thing">Java, AWS, SQL, REST, JavaScript, Jenkins, Jquery, React, Agile Software Development, Communication & Collboration, Jira, Problem Resolution, Android Development, Algorithms and Data Structures</p>
                        </div>
                    </div>
                </>
            </div>
        );
    }
}

/*function App() {
    return (
        <>
            {*//* FONTS *//*}
<link
href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"
rel="stylesheet"
type="text/css"
/>
<link
href="https://fonts.googleapis.com/css?family=Raleway:100"
rel="stylesheet"
type="text/css"
/>
<link
href="https://fonts.googleapis.com/css?family=Montserrat"
rel="stylesheet"
type="text/css"
/>
{*//* PAGE STUFF *//*}
<div className="rela-block page">
    <div className="rela-block top-bar">
        <div className="caps name">
            <div className="abs-center">Kyle J Shanks</div>
        </div>
    </div>
    <div className="side-bar">
        <div className="mugshot">
            <div className="logo">
                <svg viewBox="0 0 80 80" className="rela-block logo-svg">
                    <path
                        d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z"
                        strokeWidth="2.5"
                        fill="none"
                    />
                </svg>
                <p className="logo-text">kj</p>
            </div>
        </div>
        <p>123 My Place Drive</p>
        <p>Astoria, New York 11105</p>
        <p>1-800-CALLPLZ</p>
        <p>emailsareforsquares@gmail.com</p>
        <br />
        <p className="rela-block social twitter">Twitter stuff</p>
        <p className="rela-block social pinterest">Pinterest things</p>
        <p className="rela-block social linked-in">Linked-in man</p>
        <p className="rela-block caps side-header">Expertise</p>
        <p className="rela-block list-thing">HTML</p>
        <p className="rela-block list-thing">CSS (Stylus)</p>
        <p className="rela-block list-thing">JavaScript &amp; jQuery</p>
        <p className="rela-block list-thing">Killer Taste</p>
        <p className="rela-block caps side-header">Education</p>
        <p className="rela-block list-thing">Advanced potion making</p>
        <p className="rela-block list-thing">Degree in popping and locking</p>
        <p className="rela-block list-thing">Knitting game on point</p>
        <p className="rela-block list-thing">Culinary af</p>
    </div>
    <div className="rela-block content-container">
        <h2 className="rela-block caps title">Jr Front-End Developer</h2>
        <div className="rela-block separator" />
        <div className="rela-block caps greyed">Profile</div>
        <p className="long-margin">
            Retro DIY quinoa, mixtape williamsburg master cleanse bushwick tumblr
            chillwave dreamcatcher hella wolf paleo. Knausgaard semiotics truffaut
            cornhole hoodie, YOLO meggings gochujang tofu. Locavore ugh kale chips
            iPhone biodiesel typewriter freegan, kinfolk brooklyn kitsch man bun.
            Austin neutra etsy, lumbersexual paleo cornhole sriracha kinfolk
            meggings kickstarter.{" "}
        </p>
        <div className="rela-block caps greyed">Experience</div>
        <h3>Job #1</h3>
        <p className="light">First job description</p>
        <p className="justified">
            Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw
            denim messenger bag leggings. Hoodie PBR&amp;B photo booth, vegan
            chillwave meh paleo freegan ramps. Letterpress shabby chic fixie
            semiotics. Meditation sriracha banjo pour-over. Gochujang pickled
            hashtag mixtape cred chambray. Freegan microdosing VHS, 90's bicycle
            rights aesthetic hella PBR&amp;B.{" "}
        </p>
        <h3>Job #2</h3>
        <p className="light">Second Job Description</p>
        <p className="justified">
            Beard before they sold out photo booth distillery health goth. Hammock
            franzen green juice meggings, ethical sriracha tattooed schlitz mixtape
            man bun stumptown swag whatever distillery blog. Affogato iPhone
            normcore, meggings actually direct trade lomo plaid franzen shoreditch.
            Photo booth pug paleo austin, pour-over banh mi scenester vice food
            truck slow-carb. Street art kogi normcore, vice everyday carry crucifix
            thundercats man bun raw denim echo park pork belly helvetica vinyl.{" "}
        </p>
        <h3>Job #3</h3>
        <p className="light">Third Job Description</p>
        <p className="justified">
            Next level roof party lo-fi fingerstache skateboard, kogi tumblr. Shabby
            chic put a bird on it chambray, 3 wolf moon swag beard brooklyn
            post-ironic taxidermy art party microdosing keffiyeh marfa. Put a bird
            on it 3 wolf moon cliche helvetica knausgaard. Mumblecore fingerstache
            lomo, artisan freegan keffiyeh paleo kinfolk kale chips street art blog
            flannel.
        </p>
    </div>
</div>
</>
)
}*/

export default App;

