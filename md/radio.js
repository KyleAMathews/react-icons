
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdRadio extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5.4 10.3c-1.2 0.4-2.1 1.7-2.1 3v20c0 1.9 1.5 3.4 3.4 3.4h26.6c1.9 0 3.4-1.5 3.4-3.4v-20c0-1.8-1.5-3.3-3.4-3.3h-19.5l13.8-5.6-1.1-2.7-21.1 8.6z m6.3 23c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.3 5 5-2.3 5-5 5z m21.6-13.3h-3.3v-3.3h-3.3v3.3h-20v-6.7h26.6v6.7z"/></g>
            </IconBase>
        );
    }
}
