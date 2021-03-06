
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPencil extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m11.5 32.4l1.9-1.9-5-5-1.9 1.9v2.3h2.7v2.7h2.3z m11-19.6q0-0.4-0.5-0.4-0.2 0-0.3 0.1l-11.5 11.4q-0.1 0.2-0.1 0.4 0 0.5 0.4 0.5 0.3 0 0.4-0.2l11.4-11.4q0.2-0.2 0.2-0.4z m-1.1-4l8.7 8.8-17.5 17.5h-8.8v-8.8z m14.4 2q0 1.1-0.8 1.9l-3.5 3.5-8.8-8.8 3.5-3.5q0.8-0.8 1.9-0.8 1.1 0 1.9 0.8l5 5q0.8 0.8 0.8 1.9z"/></g>
            </IconBase>
        );
    }
}
