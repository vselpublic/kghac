import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
export default class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        async function getUserReposData() {
            const response = await fetch('tailhook.json', {});
            const json = await response.json();

            return json;
        }
        getUserReposData().then((json) => { this.setState({ data: json }); });
    }

    render() {
        return (
            <div className='pure-g'>
                <div className='pure-u-1 pure-u-md-1-4'>
                    <h1 className='title'>GitHub API Client</h1>
                </div>
                <div className='pure-u-1 pure-u-md-3-4'>
                    <div className='pure-g'>
                        <div className='pure-u-1 pure-u-md-1-2'>
                            <div className='l-box'>
                                <h3>repo name</h3>
                                <p>description</p>
                            </div>
                        </div>
                        <div className='pure-u-1 pure-u-md-1-2'>
                            <div className='l-box'>
                                <p>is repo a fork?</p>
                                <p>stars count</p>
                                <p>updated date</p>
                                <p>language</p>
                            </div>
                        </div>
                        <div className='pure-u-1 pure-u-md-1-2'>
                            <div className='l-box'>
                                <h3>repo name</h3>
                                <p>description</p>
                            </div>
                        </div>
                        <div className='pure-u-1 pure-u-md-1-2'>
                            <div className='l-box'>
                                <p>is repo a fork?</p>
                                <p>stars count</p>
                                <p>updated date</p>
                                <p>language</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
