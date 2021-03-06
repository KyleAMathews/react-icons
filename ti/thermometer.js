
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiThermometer extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m21.7 25.1v-9.3c0-0.4-0.4-0.8-0.9-0.8s-0.8 0.4-0.8 0.8v9.3c-1.4 0.4-2.5 1.7-2.5 3.2 0 1.9 1.5 3.4 3.3 3.4s3.4-1.5 3.4-3.4c0-1.5-1.1-2.8-2.5-3.2z m5-2.7v-13.2c0-3.2-2.6-5.9-5.9-5.9s-5.8 2.7-5.8 5.9v13.2c-1.5 1.5-2.5 3.6-2.5 5.9 0 4.6 3.7 8.4 8.3 8.4s8.4-3.8 8.4-8.4c0-2.3-1-4.4-2.5-5.9z m-5.9 10.9c-2.7 0-5-2.2-5-5 0-1.8 1-3.4 2.5-4.3v-14.8c0-1.4 1.2-2.5 2.5-2.5s2.5 1.1 2.5 2.5v14.8c1.5 0.9 2.5 2.5 2.5 4.3 0 2.8-2.2 5-5 5z"/></g>
            </IconBase>
        );
    }
}
