import React from 'react';
import Card from './Card';
import { getUserReposData } from './github_client';
import CardDialog from "./Dialog";
import autobind from 'autobind-decorator';

/**
 * A counter button: tap the button to increase the count.
 */

export default class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            showPopup: false,
            clickedCardID: undefined,
        };
    }

    componentDidMount() {
        getUserReposData('tailhook').then((json) => { this.setState({ data: json }); });
    }

    @autobind
    onCardClick(id) {
        this.setState({ showPopup: true, clickedCardID: id });
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
                                onClick={() => { this.onCardClick(repo.id); }}
                            />
                        );
                    }
                )}
                { this.state.showPopup && <CardDialog linkToRepo={this.state.clickedCardID} />}
            </div>
        );
    }
}
