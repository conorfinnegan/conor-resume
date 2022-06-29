import React from 'react';
import ReactDOM from 'react-dom';

export default class Education extends React.Component {
    render() {

        var educationArray = [
            ['Higher Certificate in Business Management', 'Dublin Institute of Technology, Dublin, County Dublin', '05/2012'],
            ['B.S. Business Computing', 'Dublin Institute of Technology, Dublin, County Dublin', '05/2016'],
        ];

        const certArray = {
            title: 'Certifications',
            cert1: 'SAFe Agile Certification',
            cert2: 'Docker from Basic to Advanced'
        };

        return (
            <div>
                <div className="rela-block caps greyed">
                    Education
                </div>
                <h3>Higher Certificate in Business Management</h3>
                <li>Dublin Institute of Technology, Dublin, County Dublin</li>
                <li>05/2012</li>
                <h3>B.S. Business Computing</h3>
                <li>Dublin Institute of Technology, Dublin, County Dublin</li>
                <li>05/2016</li>
                <p>&nbsp;</p>
                <div className="rela-block separator" />
                <p>&nbsp;</p>
                <div className="rela-block caps greyed">{certArray.title}</div>
                <p>&nbsp;</p>
                <li className="long-margin">{certArray.cert1}</li>
                <li className="long-margin">{certArray.cert2}</li>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
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