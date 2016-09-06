import React from 'react';

export class Article extends React.Component {
    render() {
        return <span>{this.props.text}</span>;
    }
}

Article.propTypes = {
    text: React.PropTypes.string.isRequired
};
