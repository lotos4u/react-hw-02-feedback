import React, {Component} from "react";
import FeedbackForm from "../Form";
import FeedbackStatistics from "../Statistics";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleSubmit = (answer) => {
        this.setState({
            [answer]: this.state[answer] + 1,
        }, () => {
            // alert('Thanks!');
        });
    };

    render() {
        return <>
            <FeedbackForm onSubmit={this.handleSubmit}/>
            <FeedbackStatistics data={this.state}/>
        </>;
    }
}

export default Feedback;