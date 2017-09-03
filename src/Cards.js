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
            showPopup: false
        };
    }

    componentDidMount() {
        getUserReposData('tailhook').then((json) => { this.setState({ data: json }); });
    }

    @autobind
    onClickYoba() {
        console.log('YOBA');
        this.state.showPopup = true;
        console.log(this.state.showPopup);
        this.forceUpdate();
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
                                onClick={this.onClickYoba}
                            />
                        );
                    }
                )}
                { this.state.showPopup && <CardDialog />}
            </div>
        );
    }
}
