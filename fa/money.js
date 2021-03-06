
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMoney extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m16 24.2h8v-2h-2.7v-9.3h-2.3l-3.1 2.9 1.6 1.6q0.9-0.7 1.1-1.2h0.1v6h-2.7v2z m10.7-5.3q0 1.5-0.5 3t-1.2 2.8-2.1 2.1-2.9 0.8-2.9-0.8-2.1-2.1-1.2-2.8-0.5-3 0.5-2.9 1.2-2.8 2.1-2.1 2.9-0.9 2.9 0.9 2.1 2.1 1.2 2.8 0.5 2.9z m10.6 5.3v-10.6q-2.2 0-3.7-1.6t-1.6-3.8h-24q0 2.3-1.6 3.8t-3.7 1.6v10.6q2.2 0 3.7 1.6t1.6 3.8h24q0-2.2 1.6-3.8t3.7-1.6z m2.7-17.3v24q0 0.6-0.4 1t-0.9 0.3h-37.4q-0.5 0-0.9-0.3t-0.4-1v-24q0-0.5 0.4-0.9t0.9-0.4h37.4q0.5 0 0.9 0.4t0.4 0.9z"/></g>
            </IconBase>
        );
    }
}
