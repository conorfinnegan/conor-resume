import React from 'react';
import ReactDOM from 'react-dom';

export default class Summary extends React.Component {
    render() {

        const summaryArray = {
            title: 'Summary',
            summary: 'Highly qualified and enthusiastic full-stack software engineer with over 6 years experience with diversified exposure to a number of technologies in a variety of work scenarios. I have worked within small and large teams, leveraging communication and interpersonal skills to deliver workloads in accordance with strict deadlines while using a strongly developed ability to solve any problem logically and analytically.'
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