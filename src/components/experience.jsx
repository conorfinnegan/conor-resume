import React from 'react';
import ReactDOM from 'react-dom';
import DublinExp from './dublinExp';
import TorontoExp from './torontoExp';

export default class Experience extends React.Component {
    render() {
        return (
            <div>
                <DublinExp />
                <TorontoExp />
            </div>
        )
    }
}