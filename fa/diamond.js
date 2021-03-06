
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaDiamond extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m4.1 16.5l12.2 13-5.9-13h-6.3z m15.9 15.1l6.8-15.1h-13.6z m-9.5-17.6l4-7.5h-5.1l-5.7 7.5h6.8z m13.2 15.5l12.2-13h-6.3z m-10.4-15.5h13.4l-4-7.5h-5.4z m16.2 0h6.7l-5.6-7.5h-5.1z m2.7-9.5l7.5 10q0.3 0.3 0.3 0.8t-0.3 0.8l-18.8 20q-0.3 0.4-0.9 0.4t-0.9-0.4l-18.8-20q-0.3-0.3-0.3-0.8t0.3-0.8l7.5-10q0.3-0.5 0.9-0.5h22.5q0.7 0 1 0.5z"/></g>
            </IconBase>
        );
    }
}
