import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Move extends Component {
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
        desc: PropTypes.string.isRequired,
    }

    static defaultProps = {
        desc: 'Description not available',
    }

    render() {
        return (
            <div>
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}