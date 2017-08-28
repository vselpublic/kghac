import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
    repoName,
    repoDescription,
    repoIsFork,
    repoStars,
    repoUpdatedDate,
    repoLanguage
}) => {
    return (
        <div>
            <div className='pure-u-1 pure-u-md-1-2'>
                <div className='l-box'>
                    <h3>{`${repoName}`}</h3>
                    <p>{`${repoDescription}`}</p>
                </div>
            </div>
            <div className='pure-u-1 pure-u-md-1-2'>
                <div className='l-box'>
                    <p>{`${repoIsFork}`}</p>
                    <p>{`${repoStars}`}</p>
                    <p>{`${repoUpdatedDate}`}</p>
                    <p>{`${repoLanguage}`}</p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    repoName: PropTypes.string.isRequired,
    repoDescription: PropTypes.string.isRequired,
    repoIsFork: PropTypes.bool.isRequired,
    repoStars: PropTypes.number.isRequired,
    repoUpdatedDate: PropTypes.string.isRequired,
    repoLanguage: PropTypes.string.isRequired,
};

export default Card;
