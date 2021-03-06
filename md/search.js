
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSearch extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.8 23.3h-1.3l-0.4-0.4c1.6-1.9 2.6-4.4 2.6-7.1 0-5.9-4.9-10.8-10.9-10.8s-10.8 4.9-10.8 10.8 4.9 10.9 10.8 10.9c2.7 0 5.2-1 7.1-2.6l0.4 0.4v1.3l8.4 8.3 2.4-2.4-8.3-8.4z m-10 0c-4.1 0-7.5-3.3-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.3 7.5-7.5 7.5z"/></g>
            </IconBase>
        );
    }
}
