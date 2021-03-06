
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaInbox extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.4 20.3h6.6q0-0.1 0-0.2t-0.1-0.2l-4.4-10.4h-15l-4.4 10.4q-0.1 0.1-0.1 0.2t0 0.2h6.6l2 4h6.8z m10.8 0.6v10.2q0 0.5-0.4 0.9t-0.9 0.4h-29.8q-0.5 0-0.9-0.4t-0.4-0.9v-10.2q0-1.3 0.5-2.6l5-11.7q0.3-0.5 0.8-0.8t1.1-0.4h17.6q0.5 0 1.1 0.4t0.8 0.8l5 11.7q0.5 1.3 0.5 2.6z"/></g>
            </IconBase>
        );
    }
}
