
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdCameraEnhance extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m15 5l-3 3.3h-5.3c-1.9 0-3.4 1.5-3.4 3.4v20c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.9-1.5-3.4-3.4-3.4h-5.2l-3.1-3.3h-10z m5 25c-4.6 0-8.3-3.7-8.3-8.3s3.7-8.4 8.3-8.4 8.3 3.8 8.3 8.4-3.7 8.3-8.3 8.3z m0-1.7l2.1-4.5 4.6-2.1-4.6-2.1-2.1-4.6-2.1 4.6-4.6 2.1 4.6 2.1z"/></g>
            </IconBase>
        );
    }
}
