
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCamera extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 14.2q2.5 0 4.2 1.8t1.8 4.2-1.8 4.3-4.2 1.7-4.2-1.7-1.8-4.3 1.8-4.2 4.2-1.8z m14.7-8.6q2.2 0 3.7 1.5t1.6 3.8v18.7q0 2.2-1.6 3.8t-3.7 1.5h-29.4q-2.2 0-3.7-1.5t-1.6-3.8v-18.7q0-2.2 1.6-3.8t3.7-1.5h4.7l1.1-2.9q0.4-1 1.4-1.7t2.2-0.8h10.6q1.1 0 2.2 0.8t1.4 1.7l1.1 2.9h4.7z m-14.7 24q3.9 0 6.6-2.8t2.7-6.6-2.7-6.5-6.6-2.8-6.6 2.8-2.7 6.5 2.7 6.6 6.6 2.8z"/></g>
            </IconBase>
        );
    }
}
