
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMapPin extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m18.9 23q1.4 0 2.7-0.4v13.9q0 0.5-0.4 0.9t-0.9 0.4h-2.7q-0.6 0-1-0.4t-0.4-0.9v-13.9q1.3 0.4 2.7 0.4z m0-23q4.5 0 7.7 3.2t3.1 7.6-3.1 7.6-7.7 3.2-7.6-3.2-3.2-7.6 3.2-7.6 7.6-3.2z m0 4.7q0.3 0 0.5-0.2t0.2-0.4-0.2-0.5-0.5-0.2q-3.1 0-5.2 2.1t-2.2 5.3q0 0.3 0.2 0.5t0.5 0.2 0.5-0.2 0.2-0.5q0-2.5 1.7-4.3t4.3-1.8z"/></g>
            </IconBase>
        );
    }
}
