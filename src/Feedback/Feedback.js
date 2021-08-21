import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickGood = () => {
    this.setState(prevState => {
      return {
        Good: prevState.Good + 1,
      };
    });
  };

  clickNeutral = () => {
    this.setState(prevState => {
      return {
        Neutral: prevState.Neutral + 1,
      };
    });
  };

  clickBad = () => {
    this.setState(prevState => {
      return {
        Bad: prevState.Bad + 1,
      };
    });
  };

  render() {
    return (
      <div className="Feedback">
        <p className="FeedbackTitle"> Please Leave feedback </p>
        <div className="FeedbackButtonContainer">
          <button type="button" id="1" className="FeedbackButton" onClick={this.clickGood}>
            Good
          </button>
          <button type="button" id="2" className="FeedbackButton" onClick={this.clickNeutral}>
            Neutral
          </button>
          <button type="button" id="3" className="FeedbackButton" onClick={this.clickBad}>
            Bad
          </button>
        </div>
        <div className="FeedbackStatistic">
          <p className="FeedbackStatisticTitle"> Statistic </p>
          <div className="FeedbackStatisticSynopsis">
            <ul className="FeedbackStatisticList">
              <li className="FeedbackStatisticItem"> Good: {this.state.Good} </li>
              <li className="FeedbackStatisticItem"> Neutral: {this.state.Neutral}</li>
              <li className="FeedbackStatisticItem"> Bad: {this.state.Bad}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
