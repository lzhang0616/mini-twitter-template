import React from 'react';

const TweetPost = ({text}) => (
  <div className='well clearfix'>
    <textarea className='form-control' value={text}></textarea><br/>
  </div>
);

export default TweetPost;
