
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaVideoCamera extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m38.9 7.4v23q0 0.9-0.8 1.2-0.3 0.1-0.5 0.1-0.6 0-1-0.4l-8.5-8.5v3.5q0 2.5-1.8 4.3t-4.3 1.8h-14.8q-2.5 0-4.3-1.8t-1.8-4.3v-14.8q0-2.5 1.8-4.3t4.3-1.8h14.8q2.5 0 4.3 1.8t1.8 4.3v3.5l8.5-8.5q0.4-0.4 1-0.4 0.2 0 0.5 0.1 0.8 0.3 0.8 1.2z"/></g>
            </IconBase>
        );
    }
}
