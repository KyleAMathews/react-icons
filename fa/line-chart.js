
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaLineChart extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m40 31.5v2.5h-40v-30h2.5v27.5h37.5z m-2.5-24.4v8.5q0 0.4-0.4 0.6t-0.7-0.2l-2.3-2.3-12.4 12.3q-0.2 0.2-0.4 0.2t-0.5-0.2l-4.5-4.5-8.2 8.1-3.7-3.7 11.4-11.5q0.2-0.2 0.5-0.2t0.4 0.2l4.6 4.6 9-9.1-2.4-2.3q-0.3-0.4-0.1-0.7t0.6-0.4h8.5q0.2 0 0.4 0.2t0.2 0.4z"/></g>
            </IconBase>
        );
    }
}
