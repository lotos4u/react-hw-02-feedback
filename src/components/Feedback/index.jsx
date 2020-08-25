import React from "react";
import PropTypes from 'prop-types';
import FeedbackForm from "../Form";
import FeedbackStatistics from "../Statistics";

const Feedback = (props) => {
    const state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    return <>
        <FeedbackForm/>
        <FeedbackStatistics data={state} />
    </>;
};

Feedback.propTypes = {}

Feedback.defaultProps = {}

export default Feedback;