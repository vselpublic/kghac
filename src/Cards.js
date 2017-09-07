import React from 'react';
import Card from './Card';
import CardDialog from './Dialog';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { getDataFromGithub } from './actions';
import { bindActionCreators } from 'redux';


function mapStateToProps(state) {
    return {
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDataFromGithub: bindActionCreators(getDataFromGithub, dispatch)
    };
}

class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            clickedCardID: undefined,
        };
    }

    componentDidMount() {
        this.props.getDataFromGithub('tailhook');
    }

    @autobind
    onCardClick(id) {
        this.setState({ showPopup: true, clickedCardID: id });
    }

    @autobind
    onPopUpCrossClicked() {
        this.setState({ showPopup: false, clickedCardID: undefined });
    }

    render() {
        return (
            <div>
                {this.props.data.map(
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
                {
                    this.state.showPopup
                    && <CardDialog
                        linkToRepo={this.state.clickedCardID}
                        onCrossClicked={this.onPopUpCrossClicked}
                    />
                }
            </div>
        );
    }
}

const CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards);
export default CardsContainer;
