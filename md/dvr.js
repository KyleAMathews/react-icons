
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdDvr extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 5h-30c-1.8 0-3.3 1.5-3.3 3.3v20c0 1.9 1.5 3.4 3.3 3.4h8.3v3.3h13.4v-3.3h8.3c1.8 0 3.3-1.5 3.3-3.4l0-20c0-1.8-1.5-3.3-3.3-3.3z m0 23.3h-30v-20h30v20z m-3.3-15h-18.4v3.4h18.4v-3.4z m0 6.7h-18.4v3.3h18.4v-3.3z m-20-6.7h-3.4v3.4h3.4v-3.4z m0 6.7h-3.4v3.3h3.4v-3.3z"/></g>
            </IconBase>
        );
    }
}
