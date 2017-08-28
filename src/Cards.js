import React from 'react';
import Card from './Card';
import { getUserReposData } from './github_client';

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
        getUserReposData('tailhook').then((json) => { this.setState({ data: json }); });
    }

    render() {
        return (
            <div>
                {this.state.data.map(
                    (repo) => {
                        return (
                            <Card
                                key={repo.id}
                                repoName={repo.name}
                                repoDescription={repo.description ? repo.description : 'No Description Yet'}
                                repoIsFork={repo.fork}
                                repoStars={repo.stargazers_count}
                                repoUpdatedDate={repo.updated_at}
                                repoLanguage={repo.language ? repo.language : ':=('}
                            />
                        );
                    }
                )}
            </div>
        );
    }
}
