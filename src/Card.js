import React, { PropTypes } from 'react';

const Card = ({
    repoName,
}) => {
    return (
        <div>
            <div className='pure-u-1 pure-u-md-1-2'>
                <div className='l-box'>
                    <h3>{`${repoName}`}</h3>
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
    );
};

Card.propTypes = {
    repoName: PropTypes.string.isRequired,
};

export default Card;
