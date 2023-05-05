// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onClickEmoji = () => {
    this.setState({isFeedback: true})
  }

  onFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-card">
        <h1 className="feedback-heading">
          How satisfied are you With our
          <br />
          customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachList => (
            <li key={eachList.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachList.imageUrl}
                  className="emoji-img"
                  alt={eachList.name}
                />
                <br />
                <span>{eachList.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  onThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-card">
        <img src={loveEmojiUrl} className="love-img" alt="love emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-text">
          We will use your feedback to improve our customer
          <br />
          support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state

    return (
      <div className="bg-container">
        <div className="feedback-container">
          {isFeedback ? this.onThankYou() : this.onFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
