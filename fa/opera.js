
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaOpera extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 34.3q1.6 0 2.9-1.3t2.2-3.5 1.2-4.9 0.5-5.7-0.5-5.7-1.2-4.9-2.2-3.5-2.9-1.3-2.9 1.3-2.2 3.5-1.2 4.9-0.5 5.7 0.5 5.7 1.2 4.9 2.2 3.5 2.9 1.3z m0 3.5q-3.9 0-7-1.6t-5.1-4.3-3-6.1-1-6.9 1-6.9 3-6.1 5.1-4.3 7-1.6q3.1 0 5.8 1.1t4.5 2.8 3.2 4.3 2 5.1 0.6 5.6-0.6 5.6-2 5.1-3.2 4.3-4.5 2.8-5.8 1.1z"/></g>
            </IconBase>
        );
    }
}
