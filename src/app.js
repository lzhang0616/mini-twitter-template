import React, { Component } from 'react';
import TweetBox from './components/TweetBox';
import TweetPost from './components/TweetPost';

/**
 * Example top level component that renders a child component
 */
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postText: ''
    };
  }

  onTweetSubmit = postText => {
    this.setState({ postText });
  }

  render() {
    const { onTweetSubmit } = this;
    const { postText } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <TweetPost text={postText} />
        </div>
        <div className='row'>
          <TweetBox onTweet={onTweetSubmit} />
        </div>
      </div>
    );
  }
}
