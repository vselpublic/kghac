import React from 'react';
import Cards from './Cards';
import Search from './Search';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { getDataFromGithub } from './actions';
import { bindActionCreators } from 'redux';


function mapDispatchToProps(dispatch) {
    return {
        getDataFromGithub: bindActionCreators(getDataFromGithub, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

class CardsRouter extends React.Component {
    @autobind
    getData(name) {
        this.props.getDataFromGithub(name);
    }

    render() {
        console.log(this.props.match.params.filter);
        return (
            <div>
                {
                    Array.isArray(this.props.data) && this.props.data.length === 0
                    && <Search
                        getDataFromGithub={this.props.getDataFromGithub}
                    />
                }
                {
                    this.props.data
                    && <Cards
                        data={this.props.data}
                    />
                }
            </div>
        );
    }
}

const CardsContainer = connect(mapStateToProps, mapDispatchToProps)(CardsRouter);
export default CardsContainer;
