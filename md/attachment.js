
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAttachment extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m12.5 30c-5.1 0-9.2-4.1-9.2-9.2s4.1-9.1 9.2-9.1h17.5c3.7 0 6.7 3 6.7 6.6s-3 6.7-6.7 6.7h-14.2c-2.3 0-4.1-1.9-4.1-4.2s1.8-4.1 4.1-4.1h12.5v2.5h-12.5c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.7 1.6 1.7h14.2c2.3 0 4.2-1.9 4.2-4.2s-1.9-4.1-4.2-4.1h-17.5c-3.7 0-6.7 3-6.7 6.6s3 6.7 6.7 6.7h15.8v2.5h-15.8z"/></g>
            </IconBase>
        );
    }
}
