
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPlayCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 2.7q4.4 0 8.1 2.2t5.9 5.9 2.2 8.1-2.2 8.1-5.9 5.9-8.1 2.2-8.1-2.2-5.9-5.9-2.2-8.1 2.2-8.1 5.9-5.9 8.1-2.2z m8.1 17.4q0.7-0.4 0.7-1.2t-0.7-1.2l-11.5-6.7q-0.6-0.4-1.3 0-0.7 0.4-0.7 1.2v13.5q0 0.7 0.7 1.1 0.3 0.2 0.6 0.2 0.4 0 0.7-0.2z"/></g>
            </IconBase>
        );
    }
}
