
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiImage extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><circle cx="14.166666666666668" cy="14.168333333333333" r="4.166666666666667"/><path d="m26.7 16.7c-3.4 0-5 5-7.5 5s-2.5-1.7-5.9-1.7-5 6.7-5 6.7h23.4s-1.7-10-5-10z m6.6-11.7h-26.6c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.9 1.5 3.4 3.4 3.4h26.6c1.9 0 3.4-1.5 3.4-3.4v-20c0-1.8-1.5-3.3-3.4-3.3z m0 23.3h-26.6v-20h26.6v20z"/></g>
            </IconBase>
        );
    }
}
