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

  countTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositive() {
    const total = this.countTotal();
    if (!total) {
      return 0;
    }
    const { good } = this.state;
    const result = Math.round((good / (total)) * 100);
    return result;
  }

  render() {
      return (
        <div>
          <Section title="Please leave your feedback:">
            <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback} />
          </Section>
          <Section title="Statistics:">
            {this.countTotal() ?
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotal()}
                positiveFeedback={this.countPositive()} /> :
              <Notification message="There is no feedback yet." />}
            </Section>
        </div>

        )
    }
}
