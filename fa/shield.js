
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaShield extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m29.5 20.3v-13.5h-9.5v23.9q2.5-1.3 4.5-2.9 5-3.8 5-7.5z m4-16.2v16.2q0 1.8-0.7 3.5t-1.8 3.2-2.4 2.7-2.7 2.2-2.6 1.6-1.9 1.1-0.9 0.4q-0.2 0.1-0.5 0.1t-0.5-0.1q-0.4-0.2-0.9-0.4t-1.9-1.1-2.6-1.6-2.7-2.2-2.4-2.7-1.8-3.2-0.7-3.5v-16.2q0-0.6 0.4-1t0.9-0.4h24.4q0.5 0 0.9 0.4t0.4 1z"/></g>
            </IconBase>
        );
    }
}
