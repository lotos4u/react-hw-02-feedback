import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.scss'

const FeedbackForm = (props) => (
    <>
        <h1>Please, leave a feedback</h1>
        <button onClick={() => props.onSubmit('good')}>Good</button>
        <button onClick={() => props.onSubmit('neutral')}>Neutral</button>
        <button onClick={() => props.onSubmit('bad')}>Bad</button>
    </>
);

FeedbackForm.propTypes = {
    onSubmit: PropTypes.func,
}

FeedbackForm.defaultProps = {}

export default FeedbackForm;