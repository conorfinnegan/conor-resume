import React from 'react';
import ReactDOM from 'react-dom';

export default class Skills extends React.Component {
    render() {

        const skillsList = ['Java - Very strong knowledge of Java with over 6 years industry experience.', 'AWS - Over 3 years industry experience using AWS services such as S3, ECS, CloudWatch, Cloudtrail, etc..',
            'SQL - High level of SQL knowledge developed over my career with daily usage.', 'REST - 6+ years industry experience',
            'JavaScript & React - I have used JavaScript regularly over my professional career for front-end development & I have been using ReactJS frequently for over 2 years, both as part of my job and for personal projects.',
            'Jenkins - Used on a daily basis as part of build management and the deployment process to provide QA testers and the customer with the latest features and fixes.',
            'Jquery - 6 years industry experience',
            'Agile Software Development  - I have been using the Agile development methodology for all of my professional career.',
            'Communications & Collboration - I participate in daily calls with my own team as well as customer representatives to communicate progression, solutions and any issues.',
            'Jira  - Over 6 years of experience using Jira to monitor bugs, tasks, stories, epics, etc.',
            'Problem-Solving & Resolution - Using logical analysis and thoughtful planning, I have solved a number of issues and customer requests over my career and I have been effectively and efficiently been able to communicate these solutions.',
            'Android Developemnt - Experience from developing applications in college and personal projects.', 'Good knowledge of algorithms and data structures'];
        return (
             <div>
                <div className="rela-block caps greyed">Skills</div>
                <ul>
                    {skillsList.map(skill => (
                        <li className="long-margin">{skill}</li>
                    ))}
                </ul>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        )
    }
}