
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdNfc extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m33.3 3.3h-26.6c-1.9 0-3.4 1.5-3.4 3.4v26.6c0 1.9 1.5 3.4 3.4 3.4h26.6c1.9 0 3.4-1.5 3.4-3.4v-26.6c0-1.9-1.5-3.4-3.4-3.4z m0 30h-26.6v-26.6h26.6v26.6z m-3.3-23.3h-8.3c-1.9 0-3.4 1.5-3.4 3.3v3.8c-1 0.6-1.6 1.7-1.6 2.9 0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3c0-1.2-0.6-2.3-1.6-2.9v-3.8h5v13.4h-13.4v-13.4h3.4v-3.3h-6.7v20h20v-20z"/></g>
            </IconBase>
        );
    }
}
