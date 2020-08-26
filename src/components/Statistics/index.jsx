import React from "react";
import PropTypes from 'prop-types';

const FeedbackStatistics = (props) => {

    const countTotalFeedback = () => {
        return props.data.good + props.data.neutral + props.data.bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (total === 0) {
            return '-';
        }
        return Math.round(100 * (props.data.good + props.data.neutral) / total) + '%';
    };

    if (!props.data || !(props.data.bad || props.data.neutral || props.data.good)) {
        return '';
    }

    return <>
        <h1>Statistics</h1>
        <p>Good: {props.data.good}</p>
        <p>Neutral: {props.data.neutral}</p>
        <p>Bad: {props.data.bad}</p>
        <p>Total: {countTotalFeedback()}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage()}</p>
    </>

};

FeedbackStatistics.propTypes = {
    data: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }),
}

FeedbackStatistics.defaultProps = {}

export default FeedbackStatistics;