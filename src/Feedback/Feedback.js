import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
  state = {
    valueGood: 0,
    valueNeutral: 0,
    valueBad: 0,
  };

  clickGood = () => {
    this.setState(prevState => {
      return {
        valueGood: prevState.valueGood + 1,
      };
    });
  };

  clickNeutral = () => {
    this.setState(prevState => {
      return {
        valueNeutral: prevState.valueNeutral + 1,
      };
    });
  };

  clickBad = () => {
    this.setState(prevState => {
      return {
        valueBad: prevState.valueBad + 1,
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
              <li className="FeedbackStatisticItem"> Good: {this.state.valueGood} </li>
              <li className="FeedbackStatisticItem"> Neutral: {this.state.valueNeutral}</li>
              <li className="FeedbackStatisticItem"> Bad: {this.state.valueBad}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
