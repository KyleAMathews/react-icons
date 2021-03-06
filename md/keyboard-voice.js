
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdKeyboardVoice extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 25c2.8 0 5-2.2 5-5l0-10c0-2.8-2.2-5-5-5s-5 2.2-5 5v10c0 2.8 2.2 5 5 5z m8.8-5c0 5-4.2 8.5-8.8 8.5s-8.8-3.5-8.8-8.5h-2.9c0 5.7 4.6 10.4 10 11.2v5.5h3.4v-5.5c5.4-0.8 10-5.5 10-11.2h-2.9z"/></g>
            </IconBase>
        );
    }
}
