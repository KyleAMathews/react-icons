
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdRestore extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m21.7 5c-8.3 0-15 6.7-15 15h-5l6.5 6.5 0.1 0.2 6.7-6.7h-5c0-6.4 5.2-11.7 11.7-11.7s11.6 5.2 11.6 11.7-5.2 11.7-11.6 11.7c-3.2 0-6.2-1.3-8.3-3.5l-2.3 2.4c2.7 2.7 6.4 4.4 10.6 4.4 8.3 0 15-6.7 15-15s-6.7-15-15-15z m-1.7 8.3v8.4l7.1 4.2 1.2-2-5.8-3.5v-7.1h-2.5z"/></g>
            </IconBase>
        );
    }
}
