import React from 'react';
import PropTypes from 'prop-types';

export default class CardDialog extends React.Component {
    static defaultProps = {
        linkToRepo: '',
        linkToFork: '',
        contributors: [],
        languages: [],
        prs: [],
    };

    static propTypes = {
        linkToRepo: PropTypes.string,
        linkToFork: PropTypes.string,
        contributors: PropTypes.array,
        languages: PropTypes.array,
        prs: PropTypes.array,
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            searchTerm: '',
            current: 0,
            value: this.props.value,
        };
    }

    render() {
        return (
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <h2>{`${this.props.linkToRepo}`}</h2>
                    <a className='close' href='#' onClick={this.props.onCrossClicked}>&times;</a>
                    <div className='content'>
                        Thank to pop me out of that button, but now i'm done so you can close this window.
                    </div>
                </div>
            </div>
        );
    }
}
