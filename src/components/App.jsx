import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

    render() {
      return (
        <div>
          <Section title="Please leave your feedback:">
            <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback} />
          </Section>
          <Section title="Statistics:">
            {this.state.good || this.state.bad || this.state.neutral > 0 ?
              <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad} /> :
              <Notification message="There is no feedback yet." />}

            </Section>
        </div>

        )
    }
}
