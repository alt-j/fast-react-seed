import React from 'react';

export class Article extends React.Component {
    render() {
        return <span>{this.props.text}</span>;
    }
}
