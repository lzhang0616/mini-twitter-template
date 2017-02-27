import React, { Component } from 'react';

import './TweetBox.css';

const MAX_TWEET_LENGTH = 140;

export default class TweetBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      photoAdded: false
    };
  }

  onTextChange = e => {
    this.setState({text: e.target.value});
  }

  onTweetSubmit = () => {
    this.setState({text: ''});
  }

  onPhotoAddedClick = () => {
    this.setState({photoAdded: !this.state.photoAdded});
  }

  remainingCharacters = () =>  {
    const { text, photoAdded } = this.state;
    return Math.max(MAX_TWEET_LENGTH - text.length - (photoAdded ? 23 : 0), 0);
  }

  renderErrorMessage = () => {
    if (this.remainingCharacters() > 0) return null;

    return <span className='error-message'>Too Many Characters</span>;
  }

  render() {
    const { onTextChange, remainingCharacters, onPhotoAddedClick, onTweetSubmit, renderErrorMessage } = this;
    const { text, photoAdded } = this.state;

    return (
      <div className='well clearfix'>
        {renderErrorMessage()}
        <textarea className='form-control' value={text} onChange={onTextChange}></textarea><br/>
        <span>{remainingCharacters()}</span>
        <button className='btn btn-primary pull-right' onClick={onTweetSubmit}disabled={text.length === 0 || text.length > MAX_TWEET_LENGTH}>Tweet</button>
        <button className='btn btn-default pull-right' onClick={onPhotoAddedClick}>{photoAdded ? "✓ Photo Added" : "Add Photo"}</button>
      </div>
    );
  }
}
