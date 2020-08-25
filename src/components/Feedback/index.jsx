import React, {Component} from "react";
import PropTypes from 'prop-types';
import FeedbackForm from "../Form";
import FeedbackStatistics from "../Statistics";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleSubmit = (answer) => {
        const newState = {...this.state};
        newState[answer] = this.state[answer] + 1;
        this.setState(newState);
    };

    render() {
        return <>
            <FeedbackForm onSubmit={this.handleSubmit}/>
            <FeedbackStatistics data={this.state} />
        </>;
    }
}

Feedback.propTypes = {}

Feedback.defaultProps = {}

export default Feedback;