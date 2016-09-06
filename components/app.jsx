import React from 'react';
import {Article} from './article.jsx';

export class App extends React.Component {
    _renderConfig() {
        const config = this.props.config;
        if (!config) {
            return null;
        }

        return <script dangerouslySetInnerHTML={{__html: 'window.config = ' + config}} />;
    }

    _renderScript() {
        const script = this.props.script;
        if (!script) {
            return null;
        }

        return <script src={script} async/>;
    }

    render() {
        return (
            <div>
                <Article text={this.props.text} />
                {this._renderConfig()}
                {this._renderScript()}
            </div>
        );
    }
}

App.propTypes = {
    text: React.PropTypes.string.isRequired,
    script: React.PropTypes.string,
    config: React.PropTypes.string
};
