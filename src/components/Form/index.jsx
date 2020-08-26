import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const FeedbackForm = (props) => (
    <div className={styles.formContainer}>
        <h1>{props.title}</h1>
        <button onClick={() => props.onSubmit('good')}>Good</button>
        <button onClick={() => props.onSubmit('neutral')}>Neutral</button>
        <button onClick={() => props.onSubmit('bad')}>Bad</button>
    </div>
);

FeedbackForm.propTypes = {
    title: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
}

FeedbackForm.defaultProps = {
    title: 'Please, leave a feedback',
}

export default FeedbackForm;