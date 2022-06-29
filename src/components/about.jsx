import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Summary from './summary'




export default class About extends React.Component {
    render() {

        const aboutArray = {
            address: '461 Adelaide Street West, Toronto, ON. M5V 0L6',
            email: 'confinn93@gmail.com',
            phoneNum: '6473272495'
        };
        return (
            <div>
                <div className="rela-block top-bar">
                    <div className="caps name">
                        <div className="abs-center">Conor Finnegan</div>
                    </div>
                </div>
                <div className="rela-block content-container">
                    <h2 className="rela-block caps title">Software Engineer</h2>
                    <div className="rela-block separator" />
                    <p className="rela-block social address">{aboutArray.address}</p>
                    <p className="rela-block social email">{aboutArray.email}</p>
                    <p className="rela-block social phone">{aboutArray.phoneNum}</p>
                    <div className="rela-block separator" />
                </div>
            </div>
        )
    }
}
