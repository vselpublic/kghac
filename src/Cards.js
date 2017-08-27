import React from 'react';
import Card from './Card';

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
                    {this.state.data.map(
                        (repo) => {
                            return <Card repoName={repo.name} />;
                        }
                    )}
                </div>
            </div>
        );
    }
}
