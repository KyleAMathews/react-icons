
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaToggleOn extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m0 19q0-2.6 1-4.9t2.7-4 3.9-2.6 4.9-1h15q2.5 0 4.9 1t3.9 2.6 2.7 4 1 4.9-1 4.8-2.7 4-3.9 2.7-4.9 1h-15q-2.5 0-4.9-1t-3.9-2.7-2.7-4-1-4.8z m27.5 10q2 0 3.9-0.8t3.2-2.1 2.1-3.2 0.8-3.9-0.8-3.9-2.1-3.2-3.2-2.1-3.9-0.8-3.9 0.8-3.2 2.1-2.1 3.2-0.8 3.9 0.8 3.9 2.1 3.2 3.2 2.1 3.9 0.8z"/></g>
            </IconBase>
        );
    }
}
