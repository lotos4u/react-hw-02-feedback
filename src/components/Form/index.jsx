import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.scss'

const FeedbackForm = (props) => (
    <>
        <h1>Please, leave a feedback</h1>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
    </>
);

FeedbackForm.propTypes = {}

FeedbackForm.defaultProps = {}

export default FeedbackForm;