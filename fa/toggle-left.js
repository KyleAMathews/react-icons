
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaToggleLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.4 12.2v13.5q0 0.5-0.4 0.9t-0.9 0.4q-0.5 0-0.8-0.3l-9.5-6.7q-0.6-0.4-0.6-1.1t0.6-1.1l9.5-6.7q0.3-0.3 0.8-0.3 0.5 0 0.9 0.4t0.4 1z m5.4 16.8v-20.2q0-0.3-0.2-0.5t-0.5-0.2h-20.2q-0.3 0-0.5 0.2t-0.2 0.5v20.2q0 0.3 0.2 0.5t0.5 0.2h20.2q0.3 0 0.5-0.2t0.2-0.5z m5.4-20.2v20.2q0 2.5-1.8 4.3t-4.3 1.8h-20.2q-2.5 0-4.3-1.8t-1.8-4.3v-20.2q0-2.5 1.8-4.3t4.3-1.8h20.2q2.5 0 4.3 1.8t1.8 4.3z"/></g>
            </IconBase>
        );
    }
}
