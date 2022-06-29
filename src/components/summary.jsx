import React from 'react';
import ReactDOM from 'react-dom';

export default class Summary extends React.Component {
    render() {

        const summaryArray = {
            title: 'Summary',
            summary: 'Highly qualified and enthusiastic professional with over 6 years experience with diversified exposure to a number of technologies in a variety of work scenarios. I have worked within small and large teams, leveraging communication and interpersonal skills to deliver workloads in accordance with strict deadlines while using a strongly developed ability to solve any problem logically and analytically.'
        };

        const interests = ['Travelling - Both city-breaks and wilderness escapes.', 'Listening to music and podcasts', 'Fantasy sports', 'Watching documentaries', 'Reading'];

        const hobbies = ['Sports - I play a number of team sports including Gaelic Football, soccer, rugby, softball.',
            'Volunteering - As well as playing sports, I also help out with the running of sports clubs by assisting with the day-to-day tasks and coaching youth teams.', 'Hiking', 'Yoga', 'Cooking', 'Gaming'];

        return (
            <div>
                <div className="rela-block caps greyed">{summaryArray.title}</div>
                <p className="long-margin">{summaryArray.summary}</p>
                <p>&nbsp;</p>
                <div className="rela-block caps greyed">Interests & Hobbies</div>
                <h3>Interests</h3>
                <ul>
                    {interests.map(interest => (
                        <li className="long-margin">{interest}</li>
                    ))}
                </ul>
                <h3>Hobbies</h3>
                <ul>
                    {hobbies.map(hobby => (
                        <li className="long-margin">{hobby}</li>
                    ))}
                </ul>
                {/*<div>
                    <div className="rela-block caps greyed">Experience & Work History</div>
                    <h4>Software Engineer at FINEOS Corporation</h4>
                    <h5>Dublin, County Dublin - 06/2016 - 01/2018</h5>
                    <p>Working in an agile environment on a large J2EE platform which provides software solutions to provide modern
                        customer-centric core software to the life, accident and health industry.</p>
                </div>
                <div>
                    <div className="rela-block caps greyed">
                        Education
                    </div>
                    <h4>Higher Certificate in Business Management</h4>
                    <li>Dublin Institute of Technology, Dublin, County Dublin</li>
                    <li>05/2012</li>
                    <h4>B.S. Business Computing</h4>
                    <li>Dublin Institute of Technology, Dublin, County Dublin</li>
                    <li>05/2016</li>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
                <div>

                </div>*/}
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