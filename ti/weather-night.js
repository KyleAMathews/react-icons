
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiWeatherNight extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m17.5 33.3c-1.4 0-2.8-0.2-4.2-0.7l-2.2-0.8 1.5-1.8c2.1-2.6 3.2-5.8 3.2-9.2s-1.1-6.5-3.2-9.1l-1.5-1.8 2.2-0.8c1.3-0.5 2.8-0.8 4.2-0.8 6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z m-0.9-3.3c0.3 0 0.6 0 0.9 0 5.1 0 9.2-4.1 9.2-9.2s-4.1-9.1-9.2-9.1c-0.3 0-0.6 0-0.9 0 1.7 2.7 2.6 5.9 2.6 9.1s-0.9 6.4-2.6 9.2z"/></g>
            </IconBase>
        );
    }
}
