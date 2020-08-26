import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const FeedbackForm = (props) => (
    <>
        <h1>Please, leave a feedback</h1>
        <button className={styles.button} onClick={() => props.onSubmit('good')}>Good</button>
        <button className={styles.button} onClick={() => props.onSubmit('neutral')}>Neutral</button>
        <button className={styles.button} onClick={() => props.onSubmit('bad')}>Bad</button>
    </>
);

FeedbackForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

FeedbackForm.defaultProps = {}

export default FeedbackForm;