import React from 'react';
import ReactDOM from 'react-dom';

export default class Certificates extends React.Component {
    render() {

        const certArray = {
            title: 'Certifications',
            cert1: 'SAFe Agile Certification',
            cert2: 'Docker from Basic to Advanced'
        };

        return (
            <div>
                <div className="rela-block caps greyed">{certArray.title}</div>
                <p>&nbsp;</p>
                <li className="long-margin">{certArray.cert1}</li>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
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
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        )
    }
}