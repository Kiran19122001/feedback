import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isShow: true}

  onResponse = () => {
    this.setState({isShow: false})
  }

  render() {
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources
    const {isShow} = this.state

    return (
      <div className="cont-1">
        <div className="cont-2">
          {isShow ? (
            <div className="emojis-cont">
              <h1>
                How satisfied are you with our customer support performance ?
              </h1>
              <ul className="demojis">
                {emojis.map(each => (
                  <li key={each.id}>
                    <button
                      type="button"
                      onClick={this.onResponse}
                      className="buttons"
                    >
                      <img
                        src={each.imageUrl}
                        alt={each.name}
                        className="emojis"
                      />
                    </button>
                    <p className="names">{each.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="love-cont">
              <img src={loveEmojiUrl} alt="love emoji" className="Love" />
              <h1 className="thanks">Thank You</h1>
              <span className="res">
                We will use this feedback to improve our customer support
                performence
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
