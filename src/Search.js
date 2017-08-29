import React from 'react';
import autobind from 'autobind-decorator';
import { getUserReposData } from './github_client';

export default class SearchDialog extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            username: ''
        };
    }

    @autobind
    onInputChange(ev) {
        this.setState({ username: ev.target.value });
    }

    @autobind
    onSubmitForm(ev) {
        ev.preventDefault();
        getUserReposData(this.state.username).then((json) => { this.setState({ data: json }); });
    }

    render() {
        return (
            <div>
                <form className='pure-form pure-form-aligned'>
                    <fieldset>
                        <div className='pure-control-group'>
                            <input
                                className='pure-input-3-4'
                                id='name'
                                placeholder='Username'
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className='pure-controls'>
                            <button
                                type='submit'
                                className='pure-button pure-button-primary'
                                onClick={this.onSubmitForm}
                            >
                                Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
