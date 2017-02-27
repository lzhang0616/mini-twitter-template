import React, { Component } from 'react';
import TweetBox from './components/TweetBox';

/**
 * Example top level component that renders a child component
 */
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <TweetBox />
        </div>
      </div>
    );
  }
}
