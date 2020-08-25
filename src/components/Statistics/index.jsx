import React from "react";
import PropTypes from 'prop-types';
import FeedbackForm from "../Form";

const FeedbackStatistics = (props) => {
    return <>
        <h1>Statistics</h1>
    </>;
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